Function.prototype.myCall = function (context) {
    let result = null;
    let argumentsParams = [...arguments].slice(1);
    if (typeof this !== 'function') {
        console.log('error, 不是一个函数');
    }
    context = context || window;
    context.fn = this;

    result = context.fn(...argumentsParams)
    delete context.fn
    return result
}

