/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

// queue에 넣어서 하고 싶은데
// level에 따라 새로운 배열에 넣어야 하는데 level 구분을 어떻게 하지?
var levelOrder = function(root) {
  // given binary tree  /left to right, level by level
  let result = [];
  
  if(root === null) return result;
  
  let queue = [root];

  while(queue.length > 0) {
      const nextLevel = [];
      const cur = [];
      
      queue.forEach((node) => {
          cur.push(node.val);
          if(node.left) {
              nextLevel.push(node.left);
          }
          if(node.right) {
              nextLevel.push(node.right);
          }
      })
      
      queue = nextLevel;
      result.push(cur);
  }

  return result;  
};