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

set3.clear();
console.log(set3.size); // 0

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

//Map
//创建一个Map
let map = new Map();
let key = {name: 'xiaobao'};

map.set(key, {sex: 'male'});
console.log(map.get(key)); //{sex: "male"}

let map2 = new Map([
    [key, {sex: 'male'}]
]);
console.log(map2.get(key)); //{sex: "male"}

//Map的属性和方法
//size属性
let map3 = new Map([
    ['name', 'xiaobao'],
    ['sex', 'male']
]);

console.log(map3.size); // 2

//操作方法
//set()
map3.set('school', 'hust');

//get()
console.log(map3.get('school')); // 'hust'

//has()
console.log(map3.has('school')); // true

//delete()
map3.delete('school');
console.log(map3.has('school')); // false

//clear()
map3.clear();
console.log(map3.size); // 0

//遍历方法
//keys()
let map4 = new Map([
    ['name', 'xiaobao'],
    ['sex', 'male']
]);

for (let item of map4.keys()) {
    console.log(item);
}
/*
 name
 sex
 */

//values()
for (let item of map4.values()) {
    console.log(item);
}
/*
 xiaobao
 male
 */

//entries()
for (let item of map4.entries()) {
    console.log(item);
}
/*
 ['name', 'xiaobao']
 ['sex', 'male']
 */

//forEach
map4.forEach((value, key) => console.log(key, value));
/*
 name xiaobao
 sex male
 */

//WeakMap
//键只能是对象
let weakMap = new WeakMap(),
    weakKey = {
        name: 'xiaobao'
    };
weakMap.set(weakKey, {sex: 'male'});

console.log(weakMap.get(weakKey)); // {sex: 'male'}

console.log(weakMap.has(weakKey)); // true

weakMap.delete(weakKey);
console.log(weakMap.has(weakKey)); // false