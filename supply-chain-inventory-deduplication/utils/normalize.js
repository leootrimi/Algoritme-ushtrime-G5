export function normalize(text) {
  if (!text) return "";
  return String(text)
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .trim();
}
