/**
 * Created by xiaobao on 2016/10/29.
 */
//函数默认参数
function say(x, y = 'xiaobao') {
    console.log(x, y);
}

say('hello');
say('hello', 'Sam');
say('hello', '');

//函数参数是默认声明，不能用let和const再次声明
// function f(x = 1) {
//     let x = 2; //报错
//     const x = 3; //报错
// }

//函数参数的作用域
let x = 1;

function f(x, y = x) {
    console.log(y);
}

f(2); //y = 2

function f2(y = x) {
    let x = 1;
    console.log(y);
}

f2(); //y = 1

//rest参数
//用于获取函数多余参数
function add(x, ...values) {
    let sum = x;

    for (let value of values) {
        sum += value;
    }

    return sum;
}

add(1);
add(1, 2, 3);

//扩展运算符...
//用于函数调用
console.log(...[1, 2, 3]);

function add2(x, y) {
    return x + y;
}

console.log(add2(...[1, 2]));

//箭头函数=>
let log = ({firstName, lastName}) => {
    return firstName + ' ' + lastName;
};

console.log(log({
    firstName: 'xiaobao',
    lastName: 'wei'
}));

//箭头函数this指向函数定义时所在的对象
// function Timer() {
//     this.s1 = 0;
//     this.s2 = 0;
//
//     setInterval(()=>this.s1++, 1000);
//     setInterval(function () {
//         this.s2++;
//     }, 1000);
// }
//
// let timer = new Timer();
//
// setTimeout(()=>console.log('s1: ', timer.s1), 3100); // s1: 3
// setTimeout(()=>console.log('s2: ', timer.s2), 3100); // s2: 0