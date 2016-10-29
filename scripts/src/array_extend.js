/**
 * Created by xiaobao on 2016/10/27.
 */
require('babel-polyfill');

//Array.from
let arrayLike = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
};
console.log(Array.from(arrayLike));

let set = new Set(['a', 'b', 'c']);
console.log(Array.from(set));

let arr = [1, 2, 3];
let arr2 = Array.from(arr); //返回的是一个新的数组

arr2[0] = 2;
console.log(arr); //[1, 2, 3]

let arr3 = Array.from(arr, (x) => x * x);
console.log(arr3);

//Array.of
let arr4 = Array.of();
let arr5 = Array.of(1);
let arr6 = Array.of(1, 2, 3);

console.log(arr4, arr5, arr6);

//copyWithin
//Array.prototype.copyWithin(target, start = 0, end = this.length)
let copyWithinArr = [1, 2, 3, 4, 5];
let targetArr = copyWithinArr.copyWithin(0, 2, 5);
console.log(targetArr);

//find和findeIndex
let findArr = [1, 2, 3, 4, 5];
let resultItem = findArr.find((value, index, arr) => {
    return value > 3;
});

let resultIndex = findArr.findIndex((value, index, arr) => {
    return value > 3;
});

console.log(resultItem, resultIndex);

//fill
let fillArr = [1, 2, 3];
fillArr.fill('a', 1, 2);

console.log(fillArr);

//keys、values、entries
let originArr = ['a', 'b', 'c'];

for (let index of originArr.keys()) {
    console.log(index);
}

for (let value of originArr.values()) {
    console.log(value);
}

for (let value of originArr) {
    console.log(value);
}

for (let [key,value] of originArr.entries()) {
    console.log(key, value);
}