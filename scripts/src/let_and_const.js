/**
 * Created by xiaobao on 2016/10/23.
 */
//let
//拥有块级作用域
var arr1 = [];
for (var i = 0; i < 10; i++) {
    arr1[i] = function () {
        console.log(i);
    };
}
arr1[6](); //10

var arr2 = [];
for (let i = 0; i < 10; i++) {
    arr2[i] = function () {
        console.log(i);
    };
}
arr2[6](); //5

//无变量提升
console.log(a);
console.log(b);

var a = 123; //undefined
let b = 123; //报错

//不可重复声明
// var c = 1;
// let c = 2; //报错

//const
//声明常量
const PI = 3.1415926;
console.log(PI);

//拥有块级作用域
{
    const MAX = 5;
}
// console.log(MAX); //报错

//不可重复声明
// var c = 1;
// const c = 2; //报错

//彻底冻结对象函数
let constantize = (obj) => {
    Object.freeze(obj);
    Object.keys(obj).forEach((key, value) => {
        if (typeof obj[key] === 'object') {
            constantize(obj[key]);
        }
    })
};

//获取顶层对象
let getGlobal = function () {
    if (typeof self !== 'undefined') {
        return self;
    } else if (typeof window !== 'undefined') {
        return window;
    } else if (typeof global !== 'undefined') {
        return global;
    } else {
        throw new Error('unable to get global object');
    }
};

console.log(getGlobal());