/**
 * Created by xiaobao on 2016/10/25.
 */
/*
 * 字符串的Unicode表示法
 * */
let s1 = '\u{20BB7}';
let ss1 = '\uD842\uDFB7';
console.log(s1, ss1); // s1 = 𠮷, s2 = 𠮷

//获取字符码点
let s2 = '𠮷A';
console.log(s2.codePointAt(0)); // 134071
console.log(s2.codePointAt(1)); // 57271
console.log(s2.codePointAt(2)); // 97

for (let ch of s2) {
    console.log(ch.codePointAt(0).toString(16));
}
// 20bb7
// 41

//检测一个字符是两字节还四字节
function is32Bit(ch) {
    if (ch.codePointAt(0) > 0xFFFF) {
        return true;
    } else {
        return false;
    }
}

console.log(is32Bit('𠮷')); //true
console.log(is32Bit('A')); //false

//将码点转换为字符
let ch1 = String.fromCodePoint(0x20BB7),
    ch2 = String.fromCodePoint(0x41);

console.log(ch1, ch2); // ch1 = 𠮷, ch2 = A

//includes,startsWith,endsWith
var s3 = 'hello world';

console.log(s3.includes('hello')); // true
console.log(s3.startsWith('world', 6)); // true
console.log(s3.endsWith('hello', 5)); // true

//repeat
console.log('ha'.repeat(3)); // hahaha

//模板字符串
let str4 = `hello world`;
let str5 = `hello
world`;

console.log(str4); // hello world
console.log(str5);
/*
   hello
   world
*/

let name = 'xiaobao',
    str6 = `hello ${name}`;

console.log(str6); // hello xiaobao

let html = `<ul>
<li>a</li>
<li>b</li>
<li>c</li>
</ul>`;

console.log(html);

function fun(name) {
    return `hello ${name}`;
}

console.log(fun('xiaobao'));