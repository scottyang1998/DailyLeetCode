/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  var i = nums.indexOf(target)
  if(i>-1) return i
  else return [...nums,target].sort((a,b)=>a-b).indexOf(target) 
};
// @lc code=end

