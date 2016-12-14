/**
 * Created by xiaobao on 2016/12/14.
 */
//Set
//创建一个Set
let set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(3);

let set2 = new Set([1, 2, 3, 3]);

console.log([...set]); // [1, 2, 3]
console.log([...set2]); // [1, 2, 3]

//Set实例的属性和方法
//size属性
let set3 = new Set([1, 2, 3, 4, 5]);
console.log(set3.size); // 5

//操作方法
set3.add(6);
console.log([...set3]); // [1, 2, 3, 4, 5, 6]

console.log(set3.has(6)); // true

set3.delete(6);
console.log(set3.has(6)); // false

//去除数组重复元素的方法
function removeDuplicateElements(array) {
    return Array.from(new Set(array));
}

function removeDuplicateElements2(array) {
    return [...new Set(array)];
}

let arr = [1, 2, 3, 3, 4, 4, 4];
console.log(removeDuplicateElements(arr)); // [1, 2, 3, 4]
console.log(removeDuplicateElements2(arr)); // [1, 2, 3, 4]

//遍历方法
//keys()
let set4 = new Set([1, 2, 3, 4]);
for (let item of set4.keys()) {
    console.log(item);
}
/*
 1
 2
 3
 4
 */

//values()
for (let item of set4.values()) {
    console.log(item);
}
/*
 1
 2
 3
 4
 */

//entries()
for (let item of set4.entries()) {
    console.log(item);
}
/*
 [1, 1]
 [2, 2]
 [3, 3]
 [4, 4]
 */

//forEach
set4.forEach((value, key) => console.log(value * 2));
/*
 2
 4
 6
 8
 */

//Set实现并集
let a = new Set([1, 2, 3]),
    b = new Set([2, 3, 4]);

let union = new Set([...a, ...b]);
console.log(...union); // 1 2 3 4

//Set实现交集
let intersect = new Set([...a].filter((value, key) => b.has(value)));
console.log(...intersect); // 2 3

//Set实现差集
let difference = new Set([...a].filter((value, key) => !b.has(value)));
console.log(...difference); // 1

//WeakSet
//成员只能是对象
//具有iterator接口的对象都可以作为WeakSet的参数
let weakSet = new WeakSet([[1, 2], [3, 4]]);

//操作方法
let item = {};
weakSet.add(item);
console.log(weakSet.has(item)); // true

weakSet.delete(item);
console.log(weakSet.has(item)); // false
