/**
 * Created by xiaobao on 2016/12/23.
 */
let co = require('co');

//Generator函数实现异步操作
let getJson = function (url) {
    let promise = new Promise((resolve, reject) => {
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.open('GET', url, true);
        xmlHttp.onreadystatechange = function () {
            if (this.readyState !== 4) {
                return;
            }
            if (this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        };
        xmlHttp.responseType = 'json';
        xmlHttp.setRequestHeader('Accept', 'application/json');
        xmlHttp.send();
    });

    return promise;
};

let genGetGitHubUserInfo = function (url) {
    return function*() {
        let result = yield getJson(url);
        console.log(result);
    }
};

let getGitHubUserInfo = genGetGitHubUserInfo('https://api.github.com/users/github')();
let result = getGitHubUserInfo.next();

result.value.then((result) => {
    getGitHubUserInfo.next(result);
}).catch((err) => {
    console.error(err);
});

//使用co模块完成Generator函数自动执行
co(genGetGitHubUserInfo('https://api.github.com/users/github'));

//Generator函数基于Trunk函数自动执行
let run = function (gen) {
    let g = gen();

    function next(err, data) {
        let result = g.next(data);
        if (result.done) return;
        result.value(next);
    }

    next();
};

//Generator函数基于Promise对象自动执行
let run2 = function (gen) {
    let g = gen();

    function next(data) {
        let result = g.next(data);
        if (result.done) return;
        result.value.then((data) => {
            next(data);
        });
    }

    next();
};

run2(genGetGitHubUserInfo('https://api.github.com/users/github'));