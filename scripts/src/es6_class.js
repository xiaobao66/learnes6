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
console.log(versionArray);
console.log(versionArray.history);

versionArray.commit();
console.log(versionArray.history);

versionArray.push(3);
versionArray.push(4);
console.log(versionArray);

versionArray.revert();
console.log(versionArray);