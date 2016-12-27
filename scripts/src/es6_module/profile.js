/**
 * Created by xiaobao on 2016/12/27.
 */
//export命令
let firstName = 'xiaobao',
    lastName = 'wei',
    year = 1994;

function say() {
    return `${firstName} ${lastName} was born in ${year}`;
}

export {firstName, lastName, year, say};

//export default命令
export default function () {
    console.log(`hello ${firstName} ${lastName}`);
}