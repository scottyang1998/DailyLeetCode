/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix, h = [new Set(), new Set()]) {
  for(var i = 0; i < matrix.length; i++) 
      for (var j = 0; j < matrix[0].length; j++)
          if (matrix[i][j] === 0) h[0].add(i), h[1].add(j)
  for(var i = 0; i < matrix.length; i++) 
      for(var j = 0; j < matrix[0].length; j++)
          if(h[0].has(i) || h[1].has(j)) matrix[i][j] = 0
};

// @lc code=end

