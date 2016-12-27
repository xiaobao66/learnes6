/**
 * Created by xiaobao on 2016/12/27.
 */
//import逐一加载
import {firstName, lastName, year, say} from './profile';
console.log(firstName, lastName, year); // xiaobao wei 1994
console.log(say()); // xiaobao wei was born in 1994

//import整体加载
import * as me from './profile';
console.log(me.say()); // xiaobao wei was born in 1994

//import加载默认输出
import sayHello from './profile';
sayHello(); // hello xiaobao wei

//import同时加载默认输出和正常输出
import log, * as me2 from './profile';
log(); // hello xiaobao wei
console.log(me2.say()); // xiaobao wei was born in 1994

//import加载继承的模块
import * as mePlus from './profilePlus';
import species from './profilePlus';
console.log(`${mePlus.say()}, ${species()}`); // xiaobao wei was born in 1994, human