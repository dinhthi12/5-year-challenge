export function longestCommonPrefix(strs: string[]): string {
  if(strs.length === 0) return "";
  // Assume the initial prefix is string in the array
  let prefix: string = strs[0]!;

  // Iterate over each remaining string in the array
  for (let i = 1; i < strs.length; i++) {
    // While the current string does NOT start with prefix
    while (!strs[i]?.startsWith(prefix)) {
      // Trim prefix by 1 character from the end
      prefix = prefix.substring(0, prefix.length - 1);

      // If prefix is common prefix → return
      if (prefix === "") return "";
    }
  }

  // After comparing, return the longest common prefix
  return prefix;
}