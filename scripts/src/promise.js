/**
 * Created by xiaobao on 2016/12/22.
 */
//使用Promise
let timeout = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve('done');
    }, 100);
});

timeout.then((value) => {
    console.log(value);
});
//'done'

let getGitHubUsers = function (url) {
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

getGitHubUsers('https://api.github.com/search/users?q=xiaobao66').then((json) => {
    let userItems = {};
    for (let userItem of json.items) {
        userItems[userItem.login] = userItem.score;
    }
    return userItems;
}, (error) => {
    console.error('Ajax error: ' + error);
}).then((userItems) => {
    console.log(userItems);
});