Function.prototype.myApply = function (context) {
    let ret = null;
    let arg = [...arguments].slice(1)
    if (typeof this !== 'function') {
        console.log('error is not a function');
    }
    context = context || window
    context.fn = this
    if (arg) {
        ret = context.fn(arg)
    } else {
        ret = context.fn()
    }
    delete context.fn
    return ret
}
