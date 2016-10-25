/**
 * Created by xiaobao on 2016/10/25.
 */
/*
 * 字符串的Unicode表示法
 * */
let s1 = '\u{41}';
console.log(s1);

//获取字符码点
let s2 = '𠮷A';
console.log(s1.codePointAt(0));
console.log(s2.codePointAt(0));

for (let ch of s2) {
    console.log(ch.codePointAt(0).toString(16));
}

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

console.log(ch1, ch2);

//includes,startsWith,endsWith
var s3 = 'hello world';

console.log(s3.includes('hello'));
console.log(s3.startsWith('world', 6));
console.log(s3.endsWith('hello', 5));

//repeat
console.log('ha'.repeat(3));

//模板字符串
let str4 = `hello world`;
let str5 = `hello
world`;

console.log(str4);
console.log(str5);

let name = 'xiaobao',
    str6 = `hello ${name}`;

console.log(str6);

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