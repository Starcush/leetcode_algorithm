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
 * @return {boolean}
 */

function traversal (root, first, second, arr) {
  if(root) {
      arr.push(root.val);
      traversal(root[first], first, second, arr);
      traversal(root[second], first, second, arr);    
  } else {
      arr.push(null);
      return;
  }
}

var isSymmetric = function(root) {
  if(root === null) return true;
  
  let leftRoot = root.left;
  let rightRoot = root.right;
  
  let left = [];
  let right = [];
  
  traversal(leftRoot, 'left', 'right', left);
  traversal(rightRoot, 'right', 'left', right);
  
  if(JSON.stringify(left) === JSON.stringify(right)) return true;
  return false;
  
};

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/627/