export async function onRequestGet({ env, waitUntil }) {
  const current = parseInt((await env.COUNTER.get("visits")) ?? "0", 10);
  const next = current + 1;
  // KV writes add latency don't wait on it.
  waitUntil(env.COUNTER.put("visits", String(next)));
  return new Response(JSON.stringify({ count: next }), {
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });
}
