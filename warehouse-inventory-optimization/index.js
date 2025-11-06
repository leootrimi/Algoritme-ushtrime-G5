function optimizeInventory(shelfCapacity, batches) {
  const n = batches.length;
  const cap = Math.max(0, Math.floor(shelfCapacity));
  const dp = Array.from({ length: n + 1 }, () => Array(cap + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    const { size, priority } = batches[i - 1];
    for (let c = 0; c <= cap; c++) {
      let best = dp[i - 1][c];
      if (size <= c) {
        const take = dp[i - 1][c - size] + priority;
        if (take > best) best = take;
      }
      dp[i][c] = best;
    }
  }

  const accepted = [];
  let c = cap;
  for (let i = n; i >= 1; i--) {
    if (dp[i][c] !== dp[i - 1][c]) {
      accepted.push(batches[i - 1].id);
      c -= batches[i - 1].size;
    }
  }
  accepted.reverse();

  return { maxPriority: dp[n][cap], acceptedBatches: accepted };
}

const capacity1 = 50;
const batches1 = [
  { id: "B001", size: 10, priority: 60 },
  { id: "B002", size: 20, priority: 100 },
  { id: "B003", size: 30, priority: 120 },
  { id: "B004", size: 15, priority: 80 }
];
console.log("Example 1:", optimizeInventory(capacity1, batches1));

const capacity2 = 100;
const batches2 = [
  { id: "X1", size: 25, priority: 150 },
  { id: "X2", size: 40, priority: 200 },
  { id: "X3", size: 30, priority: 180 },
  { id: "X4", size: 35, priority: 220 },
  { id: "X5", size: 20, priority: 100 }
];
console.log("Example 2:", optimizeInventory(capacity2, batches2));