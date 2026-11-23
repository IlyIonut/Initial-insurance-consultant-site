// A bounded, per-instance burst limit. Apps Script retains its shared limit.
// No raw IP addresses or contact fields are retained here.
export function createContactRateLimiter({ limit = 8, windowMs = 60000, capacity = 5000 } = {}) {
  const entries = new Map();
  return (key, now) => {
    let entry = entries.get(key);
    if (!entry || now >= entry.resetAt) {
      // Expire old entries before admitting another key; never evict an active
      // limit to make room for a flood of new keys.
      if (!entry && entries.size >= capacity) {
        for (const [storedKey, value] of entries) if (now >= value.resetAt) entries.delete(storedKey);
        if (entries.size >= capacity) return { allowed: false, retryAfter: Math.ceil(windowMs / 1000) };
      }
      entry = { count: 0, resetAt: now + windowMs };
      entries.set(key, entry);
    }
    if (entry.count >= limit) return { allowed: false, retryAfter: Math.max(1, Math.ceil((entry.resetAt - now) / 1000)) };
    entry.count += 1;
    return { allowed: true };
  };
}
