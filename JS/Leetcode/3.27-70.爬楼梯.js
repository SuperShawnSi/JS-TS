/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const memo = new Map();

  function fib(n) {
    if (n <= 2) return n;

    if (memo.has(n)) return memo.get(n);

    const ans = fib(n - 1) + fib(n - 2);
    memo.set(n, ans);
    return ans;
  }
  return fib(n);
};
