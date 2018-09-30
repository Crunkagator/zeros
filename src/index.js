module.exports = function getZerosCount(number) {
  let a = 1;
  let zc = 0;
  do{
    zc+=Math.floor(number / (5 ** a++));
  } while (5 ** a <= number)
  return zc;
}
