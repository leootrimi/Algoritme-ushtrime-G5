const { runBusShortestPaths } = require("./busroutes.js");
const { runBirthdayPlanning } = require("./birthdayPlanning");

function main() {
runBusShortestPaths();

console.log("\n--------------------------------------------------\n");

runBirthdayPlanning();
}

main();
