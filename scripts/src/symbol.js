/**
 * Created by xiaobao on 2016/12/12.
 */
//Symbol——独一无二的值
let s1 = Symbol(),
    s2 = Symbol('xiaobao'),
    s22 = Symbol('xiaobao');

console.log(s1); // Symbol()
console.log(s2); // Symbol(xiaobao)
console.log(s2 === s22); // false

//作为对象属性的Symbol, 不能使用点（.）运算符
let name = Symbol('name'),
    me = {
        [name]: 'xiaobao'
    };

console.log(me[name]); // xiaobao

//定义一组常量(消除魔术字符串)
let logLevel = {
    DEBUG: Symbol('debug'),
    WARN: Symbol('warn'),
    ERROR: Symbol('error')
};

console.log(logLevel);
/*
{
    DEBUG:Symbol(debug)
    ERROR:Symbol(error)
    WARN:Symbol(warn)
}
*/

//Symbol.for在全局环境中登记Symbol值
let s3 = Symbol.for('xiaobaowei'),
    s4 = Symbol.for('xiaobaowei');

console.log(s3 === s4); // true

//Symbol.keyFor返回已登记的Symbol值的描述
let s5 = Symbol.for('hust');

console.log(Symbol.keyFor(s5)); // hust