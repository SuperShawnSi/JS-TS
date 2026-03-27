/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) return s;

  let st = 0;
  let e = 0;

  function expand(l, r) {
    while (l >= 0 && r < s.length && s[r] === s[l]) {
      r++;
      l--;
    }
    return r - l - 1;
  }

  for (let i = 0; i < s.length; i++) {
    const l1 = expand(i, i);
    const l2 = expand(i, i + 1);
    const len = Math.max(l1, l2);

    if (len > e - st + 1) {
      st = i - Math.floor((len - 1) / 2);
      e = i + Math.floor(len / 2);
    }
  }
  return s.slice(st, e + 1);
};
