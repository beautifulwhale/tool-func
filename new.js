// 手写new 操作符
function myNew() {
    let newObj = null;
    // 获取当前构造函数
    let myConstructor = Array.prototype.shift.call(arguments);
    if (typeof myConstructor !== 'function') {
        console.log('当前构造函数不是一个函数');
        return
    }
    newObj = Object.create(myConstructor.prototype)
    let result = myConstructor.apply(newObj, arguments)

    let flag = result && (typeof result === 'object' || typeof result === 'function')
    return flag ? result : newObj;
}

// test
function Student(name, age) {
    this.name = name;
    this.age = age;
}
let st = myNew(Student, 'lisa', 12)
console.log(st)