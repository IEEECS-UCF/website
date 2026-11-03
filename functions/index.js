// Fills the "Upcoming Meetings & Events" table on the home page with the next
// few events from the Discord server's event list. The bot already mirrors the
// Google Calendar there, so this shows the same events Discord does.
// If Discord can't be reached, the page keeps the fallback row from index.njk.
// Also puts the real visit count in the counter, so it's right without JS.

const SHOWN = 6;
const CACHE_SECONDS = 600;
const TZ = "America/New_York";
const CAMPUS = {
  "@type": "PostalAddress",
  streetAddress: "4000 Central Florida Blvd",
  addressLocality: "Orlando",
  addressRegion: "FL",
  postalCode: "32816",
  addressCountry: "US",
};

export async function onRequestGet({ request, env, next, waitUntil }) {
  const [page, events, visits] = await Promise.all([
    next(),
    upcomingEvents(request, env, waitUntil).catch((e) => {
      console.log(`Couldn't load Discord events: ${e}`);
      return [];
    }),
    env.COUNTER.get("visits").catch(() => null),
  ]);

  const rewriter = new HTMLRewriter();
  if (visits) {
    const digits = visits.padStart(6, "0");
    rewriter.on("#counter-digits", { element: (el) => el.setInnerContent(digits) });
  }
  if (events.length) {
    const shown = events.slice(0, SHOWN);
    const rows = shown.map((e) => row(e, env.DISCORD_GUILD_ID)).join("\n");
    const data = JSON.stringify(shown.map((e) => eventData(e, env.DISCORD_GUILD_ID, request.url)))
      .replace(/</g, "\\u003c");
    rewriter
      .on("#events-body", { element: (el) => el.setInnerContent(rows, { html: true }) })
      .on("head", { element: (el) => el.append(`<script type="application/ld+json">${data}</script>\n`, { html: true }) });
  }
  return rewriter.transform(page);
}

async function upcomingEvents(request, env, waitUntil) {
  const cache = caches.default;
  const key = new Request(new URL("/__discord-events", request.url));
  const hit = await cache.match(key);
  if (hit) return hit.json();

  const r = await fetch(`https://discord.com/api/v10/guilds/${env.DISCORD_GUILD_ID}/scheduled-events`, {
    headers: { authorization: `Bot ${env.DISCORD_BOT_TOKEN}` },
  });
  if (!r.ok) throw new Error(`Discord returned ${r.status}`);

  const events = (await r.json())
    .filter((e) => e.status === 1 || e.status === 2) // scheduled or happening now
    .sort((a, b) => Date.parse(a.scheduled_start_time) - Date.parse(b.scheduled_start_time))
    .map((e) => ({
      id: e.id,
      name: e.name,
      description: e.description,
      start: e.scheduled_start_time,
      end: e.scheduled_end_time,
      location: e.entity_metadata?.location || "Discord",
    }));

  const stored = new Response(JSON.stringify(events), {
    headers: { "content-type": "application/json", "cache-control": `max-age=${CACHE_SECONDS}` },
  });
  waitUntil(cache.put(key, stored));
  return events;
}

const day = new Intl.DateTimeFormat("en-US", { timeZone: TZ, weekday: "short", month: "short", day: "numeric" });
const time = new Intl.DateTimeFormat("en-US", { timeZone: TZ, hour: "numeric", minute: "2-digit" });

function eventLink(e, guildId) {
  return `https://discord.com/events/${guildId}/${e.id}`;
}

function row(e, guildId) {
  const start = new Date(e.start);
  let when = `${day.format(start)}, ${time.format(start)}`;
  if (e.end) when += `&ndash;${time.format(new Date(e.end))}`;
  return `<tr><th scope="row" class="table-label"><a href="${eventLink(e, guildId)}">${escape(e.name)}</a></th>` +
    `<td>${when} &#183; ${escape(e.location)}</td></tr>`;
}

// schema.org Event, so search engines can show our events in their results
function eventData(e, guildId, pageUrl) {
  const site = new URL("/", pageUrl).href;
  const room = /^(tba|tbd|discord)?$/i.test(e.location.trim()) ? null : e.location;
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: e.name,
    description: e.description ? e.description.slice(0, 500) : undefined,
    startDate: e.start,
    endDate: e.end || undefined,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    isAccessibleForFree: true,
    url: eventLink(e, guildId),
    location: {
      "@type": "Place",
      name: room ? `${room}, University of Central Florida` : "University of Central Florida",
      address: CAMPUS,
    },
    organizer: { "@type": "Organization", name: "IEEE Computer Society at UCF", url: site },
  };
}

function escape(s) {
  return String(s).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
}
