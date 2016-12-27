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