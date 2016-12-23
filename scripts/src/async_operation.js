/**
 * Created by xiaobao on 2016/12/23.
 */
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

let genGetGitHubUserInfo = function*(url) {
    let result = yield getJson(url);
    console.log(result);
};

let getGitHubUserInfo = genGetGitHubUserInfo('https://api.github.com/users/github');
let result = getGitHubUserInfo.next();

result.value.then((result) => {
    getGitHubUserInfo.next(result);
}).catch((err) => {
    console.error(err);
});
