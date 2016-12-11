/**
 * Created by xiaobao on 2016/10/29.
 */
/*
 * 属性的简洁表示
 * */
let name = 'xiaobao';
let person = {
    name,
    birth: '1994/04/22',
    say() {
        console.log('hello ' + this.name);
    }
};

person.say(); // hello xiaobao

/*
 * 属性名表达式
 * */
let person2 = {
    name,
    ['s' + 'ay']() {
        console.log('hello ' + this.name);
    }
};

person2.say(); // hello xiaobao

/*
 * Object.is方法
 * */
console.log(Object.is(+0, -0)); // false
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is('hello', 'hello')); // true
console.log(Object.is(1, 1)); // true

/*
 * Object.assign合并对象自身可枚举的属性，浅拷贝
 * */
let target = {},
    source1 = {
        name: 'xiaobao',
        sex: 'male'
    },
    source2 = {
        birth: '1994/04/22',
        say() {
            console.log(this.name, this.sex, this.birth);
        }
    };

Object.assign(target, source1, source2);
target.say(); // xiaobao, male, 1994/04/22

/*
 * 对象属性的遍历
 * */
let traverseObj = {
    name: 'xiaobao',
    sex: 'male',
    birth: '1994/04/22',
    [Symbol('school')]: 'hust'
};
Object.setPrototypeOf(traverseObj, {species: 'human'});

//for...in
//遍历对象自身和继承的可枚举属性（不包括Symbol属性）
for (let key in traverseObj) {
    console.log(key);
}
/*
name
sex
birth
species
*/

//Object.keys
//遍历对象自身的可枚举属性（不包括Symbol属性）
for (let key of Object.keys(traverseObj)) {
    console.log(key);
}
/*
name
sex
birth
*/

//Object.getOwnPropertyNames
//遍历对象自身的所有属性（包括不可枚举属性、不包括Symbol属性）
for (let key of Object.getOwnPropertyNames(traverseObj)) {
    console.log(key);
}
/*
 name
 sex
 birth
 */

//Object.getOwnPropertySymbols
//遍历对象自身的Symbol属性
for (let key of Object.getOwnPropertySymbols(traverseObj)) {
    console.log(key);
}
/*
Symbol('school')
*/

//Reflect.ownKeys
//遍历对象自身的所有属性（包括Symbol属性、不可枚举属性）
for (let key of Reflect.ownKeys(traverseObj)) {
    console.log(key);
}
/*
name
sex
birth
Symbol('school')
*/

/*
 * Object.setPrototypeOf
 * Object.getPrototypeOf
 * Object.create
 * */
let obj = {};
let protoObj = {
    x: 10
};

Object.setPrototypeOf(obj, protoObj);

console.log(obj.x); // 10

Object.getPrototypeOf(obj).x = 8;
console.log(obj.x); // 8

let obj2 = Object.create(protoObj);
console.log(obj2.x); // 8
