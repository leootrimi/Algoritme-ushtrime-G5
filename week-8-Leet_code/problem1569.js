const MOD = 1_000_000_007;

/**
 * @param {number[]} nums
 * @return {number}
 */
function numOfWays(nums) {
    const n = nums.length;

    const comb = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

    for (let i = 0; i <= n; i++) {
        comb[i][0] = 1;
        comb[i][i] = 1;
        for (let j = 1; j < i; j++) {
            comb[i][j] = (comb[i - 1][j - 1] + comb[i - 1][j]) % MOD;
        }
    }

    function helper(arr) {
        const len = arr.length;
        if (len <= 2) return 1;

        const root = arr[0];
        const left = [];
        const right = [];

        for (let i = 1; i < len; i++) {
            if (arr[i] < root) left.push(arr[i]);
            else right.push(arr[i]);
        }

        const leftWays = helper(left);
        const rightWays = helper(right);

        const L = left.length;
        const R = right.length;

        const waysToMerge = comb[L + R][L];

        return (((waysToMerge * leftWays) % MOD) * rightWays) % MOD;
    }

    const totalWays = helper(nums);
    return (totalWays - 1 + MOD) % MOD;
}


module.exports = numOfWays;
