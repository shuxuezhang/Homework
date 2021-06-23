// 加一 https://leetcode-cn.com/problems/plus-one/submissions/
/**
 * @param {number[]} digits
 * @return {number[]}
 *
 */
var plusOne = function (digits) {
  var i = digits.length - 1;
  for (; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] = digits[i] + 1;
      break;
    } else {
      digits[i] = 0;
    }
    if (i === 0) digits.unshift(1);
  }
  return digits;
};
/*
给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/plus-one
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 
*/
