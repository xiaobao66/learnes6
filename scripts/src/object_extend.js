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

person.say();

/*
 * 属性名表达式
 * */
let person2 = {
    name: name,
    ['s' + 'ay']() {
        console.log('hello ' + this.name);
    }
};

person2.say();

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
target.say();

/*
 * 对象属性的遍历
 * */
let traverseObj = {
    name: 'xiaobao',
    sex: 'male',
    birth: '1994/04/22'
};
//for...in
//遍历对象自身和继承的可枚举属性（不包括Symbol属性）
for (let key in traverseObj) {
    console.log(key);
}

//Object.keys
//遍历对象自身的可枚举属性（不包括Symbol属性）
for (let key of Object.keys(traverseObj)) {
    console.log(key);
}

//Object.getOwnPropertyNames
//遍历对象自身的所有属性（包括不可枚举属性、不包括Symbol属性）
for (let key of Object.getOwnPropertyNames(traverseObj)) {
    console.log(key);
}

//Reflect.ownKeys
//遍历对象自身的所有属性（包括Symbol属性、不可枚举属性）
for (let key of Reflect.ownKeys(traverseObj)) {
    console.log(key);
}

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

console.log(obj.x);

Object.getPrototypeOf(obj).x = 8;
console.log(obj.x);

let obj2 = Object.create(protoObj);
console.log(obj2.x);
