
import fs from "fs";
import { findDuplicates } from "./utils/deduplicate.js";
import { printResults } from "./utils/utils.js";

const existingInventory = JSON.parse(fs.readFileSync("./data/existing_inventory.json", "utf-8"));
const newProducts = JSON.parse(fs.readFileSync("./data/new_products.json", "utf-8"));

const result = findDuplicates(existingInventory, newProducts);

printResults(result);
