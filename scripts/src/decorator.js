/**
 * Created by xiaobao on 2016/12/26.
 */
//类的修饰
//target指代被修饰的类
function isTestable(target) {
    target.isTestable = true;
}

@isTestable
class TestableClass {

}

console.log(TestableClass.isTestable);

//方法的修饰
//target指代被修饰的类
//name是要修饰的属性名
//description是该属性的描述对象，修饰器可以返回一个新的description，也可以不返回。如果不返回，则使用原来的description
function readOnly(target, name, description) {
    description.writable = false;
    return description; // 本条语句可以去掉
}

class ReadOnlyClass {
    @readOnly
    log() {
        console.log('hello world');
    }
}

let readOnlyClass = new ReadOnlyClass();
readOnlyClass.log();
// readOnlyClass.__proto__.log = 'hello world'; // 报错