const {
    SyncHook,
    AsyncSeriesHook
} = require('tapable');

module.exports = class Compiler {
    constructor() {
        // compiler中可以自定义收集器，将收集到的webpack资源共享
        this.dep = [
            {
                pluginName: 'plugin1',
                webpackStatus:1
            },
            {
                pluginName: 'plugin2',
                webpackStatus:0
            },
        ]
        this.hooks = {
            startHook: new SyncHook(['_this']),
            endHook: new SyncHook(['num']),
            handlerAsyncHook: new AsyncSeriesHook(["source", "target", "routesList"])
        }
    }
    run(){
        this.startHook(this)
        // compiler中可以自定义一些默认参数
        this.endHook(10)
        this.handlerAsyncHook('Async', 'hook', 'routesList')
    }
    startHook(_this) {
        this.hooks.startHook.call(_this);
    }
    endHook(speed) {
        this.hooks.endHook.call(speed);
    }
    handlerAsyncHook() {
        this.hooks.handlerAsyncHook.promise(...arguments).then(() => {
        }, err => {
            console.error(err);
        });
    }
}