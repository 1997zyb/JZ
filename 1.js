var arr = [1, 3, 5, 7]
var num = 19
for (let i = 0; i < arr.length - 1; i++) {
  if (num < arr[0]) {
    arr.unshift(num)
    break
  }
  if (num > arr[arr.length - 1]) {
    arr.push(num)
    break
  }
  if (num > arr[i] && num < arr[i + 1] || num === arr[i]) {
    arr.splice(i + 1, 0, num)
    break
  }
}
console.log(arr);

var arr= 'dfercceeckodcsc'
console.log(arr.split(''));