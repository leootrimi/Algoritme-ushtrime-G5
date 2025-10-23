import fs from "fs";
import path from "path";

export function printResults(result) {
  console.log("DUPLICATE GROUPS FOUND:");
  result.duplicateGroups.forEach((group, index) => {
    console.log(`\nGroup ${index + 1} (key: ${group.key}) [Confidence: ${group.confidence}]`);
    group.products.forEach(p => {
      console.log(` - ${p.id} (${p.brand} ${p.model}, Supplier: ${p.supplier})`);
    });
  });

  console.log("\nNEW UNIQUE PRODUCTS:");
  result.uniqueProducts.forEach(p => {
    console.log(` - ${p.id} (${p.brand} ${p.model})`);
  });

  const resultsFolder = path.resolve("results");
  if (!fs.existsSync(resultsFolder)) fs.mkdirSync(resultsFolder);

  const outputPath = path.join(resultsFolder, "output.txt");
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));
}
