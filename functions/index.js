// Fills the "Upcoming Meetings & Events" table on the home page with the next
// few events from the Discord server's event list. The bot already mirrors the
// Google Calendar there, so this shows the same events Discord does.
// If Discord can't be reached, the page keeps the fallback row from index.njk.

const SHOWN = 3;
const CACHE_SECONDS = 600;
const TZ = "America/New_York";

export async function onRequestGet({ request, env, next, waitUntil }) {
  const page = await next();
  let events;
  try {
    events = await upcomingEvents(request, env, waitUntil);
  } catch (e) {
    console.log(`Couldn't load Discord events: ${e}`);
    return page;
  }
  if (!events.length) return page;

  const rows = events.map((e) => row(e, env.DISCORD_GUILD_ID)).join("\n");
  return new HTMLRewriter()
    .on("#events-body", { element: (el) => el.setInnerContent(rows, { html: true }) })
    .transform(page);
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
    .slice(0, SHOWN)
    .map((e) => ({
      id: e.id,
      name: e.name,
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

function row(e, guildId) {
  const start = new Date(e.start);
  let when = `${day.format(start)}, ${time.format(start)}`;
  if (e.end) when += `&ndash;${time.format(new Date(e.end))}`;
  const link = `https://discord.com/events/${guildId}/${e.id}`;
  return `<tr><th scope="row" class="table-label"><a href="${link}">${escape(e.name)}</a></th>` +
    `<td>${when} &#183; ${escape(e.location)}</td></tr>`;
}

function escape(s) {
  return String(s).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
}
