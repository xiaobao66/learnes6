/**
 * Created by xiaobao on 2016/12/22.
 */
//使用Promise
let time = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve('done');
    }, 1000);
});

time.then((value) => {
    console.log(value);
});