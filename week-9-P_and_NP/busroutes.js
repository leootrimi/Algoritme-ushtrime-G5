const INF = 1e9;

function floydWarshall(dist) {
  const n = dist.length;
  const d = dist.map(row => row.slice());

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (d[i][k] + d[k][j] < d[i][j]) {
          d[i][j] = d[i][k] + d[k][j];
        }
      }
    }
  }

  return d;
}

function runBusShortestPaths() {
  const cities = [
    "Prishtinë",
    "Pejë",
    "Prizren",
    "Shkodër",
    "Tiranë",
    "Durrës",
  ];

  const distMatrix = [
    [0,   80,  70,  INF, 180, INF],  // Prishtinë
    [80,   0,  75,  INF, INF, INF],  // Pejë
    [70,  75,   0, 160, INF, INF],   // Prizren
    [INF, INF, 160,  0, 120, INF],   // Shkodër
    [180, INF, INF, 120,  0,  35],   // Tiranë
    [INF, INF, INF, INF,  35,  0],   // Durrës
  ];

  const shortest = floydWarshall(distMatrix);

  console.log("=== Rrjeti i Autobusëve Kosovë–Shqipëri (koha në minuta) ===");
  printDistanceMatrix(cities, shortest);
}

function printDistanceMatrix(cities, matrix) {
  const n = cities.length;
  const header = ["          "].concat(cities.map((c, i) => ` ${i}(${c})`)).join("");
  console.log(header);

  for (let i = 0; i < n; i++) {
    let row = `${i}(${cities[i]})`;
    for (let j = 0; j < n; j++) {
      const val = matrix[i][j] >= INF / 2 ? "INF" : matrix[i][j].toString();
      row += val.toString().padStart(8, " ");
    }
    console.log(row);
  }
}

module.exports = {
  runBusShortestPaths,
};




// Time complexity: O(n³)
// Space complexity: O(n²)