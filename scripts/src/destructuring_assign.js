/**
 * Created by xiaobao on 2016/10/25.
 */
/*
 * 数组的解构赋值
 */
let [a,b,c] = [1, 2, 3];
console.log(a, b, c);

let [v1,[[v2],v3]] = [1, [[2], 3]];
console.log(v1, v2, v3);

let [head,...tail] = [1, 2, 3, 4];
console.log(head, tail);

//设置默认值
// let [x = 3,y = x] = []; //x = 3, y = 3
// let [x = 3,y = x] = [1]; //x = 1, y = 1
// let [x = 3,y = x] = [, 2]; //x = 3, y = 2

//惰性赋值
// function fun() {
//     console.log('aaa');
// }
//
// let [x = fun()] = [1];
// console.log(x);

/*
 * 对象的解构赋值
 */
let {x2, x1} = {x1: 1, x2: 2};
console.log(x1, x2);

let {first:f, second:s} = {first: 'hello', second: 'world'};
console.log(f, s);

//设置默认值
// let {x = 3, y = x} = {}; //x = 3, y = 3
// let {x = 3, y = x} = {x: 1}; //x = 1, y = 1
// let {x = 3, y = x} = {y: 2};

/*
 * 字符串的解构赋值
 * */
let [h1,h2,h3,h4,h5] = 'hello';
console.log(h1, h2, h3, h4, h5);

let {length: len} = 'hello';
console.log(len);

/*
 * 函数参数的解构赋值
 * */
function add([x,y]) {
    return x + y;
}

console.log(add([1, 2]));

//设置默认值
function subtract({x = 3, y = 2} = {}) {
    return x - y;
}

console.log(subtract());
console.log(subtract({}));
console.log(subtract({x: 4}));
console.log(subtract({x: 3, y: 1}));

/*
 * 解构赋值用法
 * */
//交换变量值
let a1 = 1, a2 = 2;
[a1, a2] = [a2, a1];
console.log(a1, a2);

//函数返回多个值
function assign() {
    return [1, 2];
}

let [b1,b2] = assign();
console.log(b1, b2);

function assign2() {
    return {
        c1: 1,
        c2: 2
    };
}

let {c1, c2} = assign2();
console.log(c1, c2);
