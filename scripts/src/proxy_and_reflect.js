/**
 * Created by xiaobao on 2016/12/20.
 */
//Proxy
/*
 创建一个代理器
 */
let proxy = new Proxy({}, {
    get: function (target, key) {
        console.log(`getting ${key}`);
        return target[key];
    },
    set: function (target, key, value) {
        console.log(`setting ${key} ${value}`);
        target[key] = value;
        return true;
    }
});

proxy.name = 'xiaobaowei';
//setting name xiaobaowei

console.log(proxy.name);
//getting name
//xiaobaowei

/*
 介绍Proxy的几种主要拦截
 */
//get(target, key, receiver)
let person = {
    name: 'xiaobaowei'
};

let personProxy = new Proxy(person, {
    get(target, key) {
        if (key in target) {
            return target[key];
        } else {
            throw new Error(`Property ${key} doesn't exist.`);
        }
    }
});

// console.log(personProxy.name); //xiaobaowei
// personProxy.age; //Error

//set(target, key, value, receiver)
let personProxy2 = new Proxy(person, {
    set(target, key, value) {
        if (!Number.isInteger(value)) {
            throw new TypeError(`The type of ${key} must be integer`);
        } else if (value > 150) {
            throw new RangeError(`The ${key} is out of range`);
        } else {
            target[key] = value;
            return true;
        }
    }
});

personProxy2.age = 100;
console.log(personProxy2.age); //100

// personProxy2.age = 'young'; //TypeError
// personProxy2.age = 200; //RangeError

//apply(target, ctx, args)
let sum = function (x, y) {
    return x + y;
};

let sumProxy = new Proxy(sum, {
    apply(target, ctx, args) {
        return target(...args) * 2;
    }
});

console.log(sumProxy(2, 3)); //10

//has(target, key)
let personProxy3 = new Proxy(person, {
    has(target, key) {
        if (key[0] === '_') {
            return false;
        } else {
            return key in target;
        }
    }
});

personProxy3._species = 'human';

console.log('_species' in personProxy3); //false
console.log('name' in personProxy3); //true

//对for...in循环无效
// for(let key in personProxy3) {
//     console.log(key);
// }

//construct(target, args)
let constructProxy = new Proxy(function () {
}, {
    construct(target, args) {
        console.log(`args: ${args.join('|')}`);
        return {
            value: args.reduce((pre, current) => pre * current, 1)
        }
    }
});

let obj = new constructProxy(1, 2, 3); //args: 1|2|3
console.log(obj.value); //6