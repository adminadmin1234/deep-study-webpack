const Compiler = require('./Compiler')

// plungin的主要功能是在apply函数中实现
// 所以他只要有两块功能：1.constructor() 2.apply()
class MyPlugin{
    // 让插件使用者配置该插件-暴露入口
    constructor(user) {
        this.name = '模拟插件';
        this.version = '1.0.0';
        this.user = user;
    }
    // 插件功能实现的代码，主要是插件开发者进行开发
    apply(compiler){
        compiler.hooks.startHook.tap("startPlugin", (_this) => 
        console.log(`${this.user}使用${this.name}-v${this.version}:触发startPlugin的回调,并获得compiler中的执行上下文${JSON.stringify(_this.dep)}`));
        
        compiler.hooks.endHook.tap("endPlugin", delayTime => 
        console.log(`${this.user}使用${this.name}-v${this.version}:触发endPlugin的回调 ${delayTime}`));
        
        compiler.hooks.handlerAsyncHook.tapPromise("handlerAsyncPlugin", (source, target, routesList) => {
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    console.log(`${this.user}使用${this.name}-v${this.version}:异步2秒后执行handlerAsyncHook的回调 ${source} ${target} ${routesList}`)
                    resolve();
                },2000)
            });
        });
    }
}
 
// 这里就是webpack.config.json中的插件配置项
const options = {
    plugins: [new MyPlugin('小编小编')]
}

const compiler = new Compiler();

// 绑定到compiler
for (const plugin of options.plugins) {
    if (typeof plugin === "function") {
        plugin.call(compiler, compiler);
    } else {
        plugin.apply(compiler);
    }
}
// 由compiler触发
compiler.run();