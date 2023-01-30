Function.prototype.myBind = function (context) {
    if (typeof this !== 'function') {
        console.log('error is not a function');
    }
    let arg = [...arguments].slice(1);
    let fn = this
    return function Fn() {
        return fn.apply(this instanceof Fn ? this : context, arg.concat(...arguments))
    }
}