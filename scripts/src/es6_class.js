/**
 * Created by xiaobao on 2016/12/24.
 */
//Class使用示例
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    //类的方法定义在prototype属性上面
    toString() {
        return `(${this.x}, ${this.y})`;
    }
}

let point = new Point(1, 2);
console.log(point.toString()); // (1, 2)

//类的继承
class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }

    toString() {
        return `${super.toString()} ${this.color}`;
    }
}

let colorPoint = new ColorPoint(1, 2, 'red');
console.log(colorPoint.toString()); // (1, 2) red

//Object.getPrototypeOf()
console.log(Object.getPrototypeOf(ColorPoint) === Point); // true

//继承原生构造函数
//创建一个带版本的数组
class VersionArray extends Array {
    constructor() {
        super();
        this.history = [[]];
    }

    commit() {
        this.history.push(this.slice());
    }

    revert() {
        this.splice(0, this.length, ...this.history[this.history.length - 1]);
    }
}

let versionArray = new VersionArray();
versionArray.push(1);
versionArray.push(2);
console.log(versionArray); // [1, 2]
console.log(versionArray.history); // [[]]

versionArray.commit();
console.log(versionArray.history); // [[], [1, 2]]

versionArray.push(3);
versionArray.push(4);
console.log(versionArray); // [1, 2, 3, 4]

versionArray.revert();
console.log(versionArray); // [1, 2]

//Class的Generator方法
class GeneratorClass {
    constructor(...args) {
        this.args = args;
    }

    *[Symbol.iterator]() {
        for (let arg of this.args) {
            yield arg;
        }
    }
}

for (let value of new GeneratorClass('hello', 'xiaobao')) {
    console.log(value);
}
/*
 hello
 xiaobao
 */

//Class的静态方法
class StaticMethodClass {
    constructor() {

    }

    static hello() {
        return `hello`;
    }
}

console.log(StaticMethodClass.hello()); // hello

//静态方法可以被继承
class ChildStaticMethodClass extends StaticMethodClass {
    constructor() {
        super();
    }

    static hello() {
        return `${super.hello()}, too`;
    }
}

console.log(ChildStaticMethodClass.hello()); // hello, too

//new.target
//指向调用new命令的构造函数，如果不是通过new命令调用new.target返回undefined
class Rectangle {
    constructor(length, width) {
        console.log(new.target === Rectangle);
    }
}

class Square extends Rectangle {
    constructor(length) {
        super(length, length);
    }
}

new Rectangle(1, 2); // true
new Square(1); // false