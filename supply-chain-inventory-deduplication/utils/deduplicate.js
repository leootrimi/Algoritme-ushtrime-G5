import { createProductKey } from "../utils/keyGenerator.js";

export function findDuplicates(existingProducts, newProducts) {
  const hashTable = new Map();
  const duplicateGroups = [];
  const uniqueProducts = [];

  for (const [id, product] of Object.entries(existingProducts)) {
    const key = createProductKey(product);
    if (!hashTable.has(key)) hashTable.set(key, []);
    hashTable.get(key).push({ id, ...product, source: "existing" });
  }

  for (const [id, product] of Object.entries(newProducts)) {
    const key = createProductKey(product);
    if (hashTable.has(key)) {
      const group = hashTable.get(key);
      group.push({ id, ...product, source: "new" });
      duplicateGroups.push({ key, products: group, confidence: "HIGH" });
      hashTable.delete(key);
    } else {
      uniqueProducts.push({ id, ...product });
    }
  }

  return { duplicateGroups, uniqueProducts };
}
