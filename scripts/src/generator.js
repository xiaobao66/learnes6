/**
 * Created by xiaobao on 2016/12/21.
 */
/*
 generator函数
 */
//使用示例
function* helloXiaobao() {
    yield 'hello';
    yield 'xiaobao';
    return 'ending';
}

let hx = helloXiaobao();

hx.next();
//{value: "hello", done: false}

hx.next();
//{value: "xiaobao", done: false}

hx.next();
//{value: "ending", done: true}

hx.next();
//{value: undefined, done: true}

//next方法的参数
function* fun() {
    for (let i = 0; true; i++) {
        let reset = yield i;
        if (reset) {
            i = -1;
        }
    }
}

let gen = fun();
console.log(gen.next()); //{value: 0, done: false}
console.log(gen.next()); //{value: 1, done: false}
console.log(gen.next(true)); //{value: 0, done: false}

//for...of循环
function* arrFun() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return 6;
}

for (let i of arrFun()) {
    console.log(i);
}
/*
 1
 2
 3
 4
 5
 */

//为没有遍历器接口的对象添加Iterator接口
function* objectEntries(obj) {
    let keys = Reflect.ownKeys(obj);

    for (let key of keys) {
        yield [key, obj[key]];
    }
}

let me = {
    firstName: 'Yucheng',
    lastName: 'Wei'
};

for (let [key, value] of objectEntries(me)) {
    console.log(`${key}: ${value}`);
}
/*
 firstName: Yucheng
 lastName: Wei
 */

function* objectEntries2() {
    let keys = Object.keys(this);

    for (let key of keys) {
        yield [key, this[key]];
    }
}

let me2 = {
    firstName: 'Yucheng',
    lastName: 'Wei'
};

me2[Symbol.iterator] = objectEntries2;

for (let [key, value] of me2) {
    console.log(`${key}: ${value}`);
}
/*
 firstName: Yucheng
 lastName: Wei
 */

//yield* 语句
//不带return返回值
function* inner() {
    yield 2;
    yield 3;
}

function* outer() {
    yield 1;
    yield* inner();
    yield 4;
}

console.log([...outer()]); //[1, 2, 3, 4]

//带return返回值
function* inner2() {
    yield 2;
    yield 3;
    return 'inner ends';
}

function* outer2() {
    yield 1;
    let result = yield* inner2();
    console.log(result);
    yield 4;
}

console.log([...outer2()]);
//inner ends
//[1, 2, 3, 4]