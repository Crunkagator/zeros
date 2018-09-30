module.exports = function getZerosCount(number) {
  let a = 1;
  let zc = 0;
  do{
    zc+=Math.floor(number/Math.pow(5,a++));
  } while (Math.pow(a,5) <= number)
  return zc;
}
