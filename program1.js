function longestSubstring(s) {
    let longest=0;
    let seen = {};
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (seen[char] !== undefined && seen[char] >= start) {
        start = Math.max(start, seen[char] + 1);
      }
      seen[char] = i;
      longest = Math.max(longest, i - start + 1);
    }
    return longest;
}

module.exports = { longestSubstring };


