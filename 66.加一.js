/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  digits[digits.length-1]++
  for(var i = digits.length-1 ; i >= 0 ; i--){
    if(digits[i]==10){
      digits[i]=0
      if(i==0) digits.unshift(1)
      else digits[i-1]++
    }
  }
  return digits
};
// @lc code=end

