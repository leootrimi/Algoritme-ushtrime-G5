function subsetSumIndices(nums, target) {
  const result = [];

  function backtrack(i, currentSum, indices) {
    if (currentSum === target) {
      result.push(...indices);
      return true;
    }
    if (i >= nums.length || currentSum > target) {
      return false;
    }

    if (backtrack(i + 1, currentSum + nums[i], [...indices, i])) {
      return true;
    }

    return backtrack(i + 1, currentSum, indices);
  }

  const exists = backtrack(0, 0, []);
  return { exists, subsetIndices: exists ? result : [] };
}

function runBirthdayPlanning() {
  const items = [
    { name: "Birthday Cake", cost: 40 },
    { name: "Decorations", cost: 25 },
    { name: "Drinks", cost: 30 },
    { name: "Snacks", cost: 20 },
    { name: "Music DJ", cost: 60 },
    { name: "Photographer", cost: 70 },
    { name: "Small Gifts", cost: 15 },
  ];

  const budget = 100;

  const costs = items.map(item => item.cost);
  const { exists, subsetIndices } = subsetSumIndices(costs, budget);

  console.log("Birthday Planning (Subset Sum)");
  console.log("Budget:", budget, "€");
  console.log("Available items:");
  items.forEach((item, index) => {
    console.log(`  ${index}: ${item.name} - ${item.cost}€`);
  });

  if (!exists) {
    console.log("\nNo combination of items matches the exact budget.");
  } else {
    console.log("\nA combination that matches the exact budget was found:");
    let total = 0;
    subsetIndices.forEach(i => {
      const item = items[i];
      total += item.cost;
      console.log(`  - ${item.name} (${item.cost}€)`);
    });
    console.log("Total:", total, "€");
  }
}

module.exports = {
  runBirthdayPlanning,
};


// Time complexity: O(2ⁿ)
// Space complexity: O(n)