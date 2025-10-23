import { normalize } from "./normalize.js";

function extractDescTokens(description) {
  const desc = normalize(description);
  const capacity = desc.match(/\d+gb/) || [];
  const color = desc.match(/\b(black|white|blue|gold|silver|red)\b/) || [];
  const size = desc.match(/\b\d{2,3}inch\b/) || [];
  return [...capacity, ...color, ...size].join(" ");
}

export function createProductKey(product) {
  const brand = normalize(product.brand);
  const model = normalize(product.model);
  const descTokens = extractDescTokens(product.description);
  return `${brand}|${model}|${descTokens}`.replace(/\|+$/, "");
}
