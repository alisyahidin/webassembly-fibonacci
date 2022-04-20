const fibJsMemo = (num, memo = {}) => {
  if (memo[num]) return memo[num]
  if (num <= 2) {
    memo[num] = 1
    return 1
  }
  memo[num] = fibJsMemo(num - 1, memo) + fibJsMemo(num - 2, memo)
  return memo[num]
}

console.log(fibJsMemo(60))