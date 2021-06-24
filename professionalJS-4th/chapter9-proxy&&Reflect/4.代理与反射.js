/**
 *
 *在目标对象进行操作完成前进行一些自定义的操作
 * proxy(target,handler): target:需要代理的目标对象，handler：处理程序对象，缺少一个参数会抛出typeError
 */
const target = {
  name: "draven",
};
// 空代理对象
const proxy = new Proxy(target, {});
console.log("---target---", target.name); //draven
console.log("---proxy---", proxy.name); //draven
proxy.name = "miya";
console.log("---target1---", target.name); //miya
console.log("---proxy1---", proxy.name); //miya

// 自定义捕捉器(trap)
const target1 = {
  name: "draven",
};
const handler1 = {
  get() {
    return "handler override";
  },
};
// js中可以触发get的操作有：
//1.proxy[property] 2.proxy.property 3.Object.create(proxy)['property']
const proxy1 = new Proxy(target1, handler1);
console.log("--🚀-- ~ proxy1.name", proxy1.name);
console.log("--🚀-- ~ proxy1[name]", proxy1["name"]);
console.log("--🚀-- ~ Object.create", Object.create(proxy)["name"]);
console.log("--🚀-- ~ target1", target1.name);

//----捕获器参数和反射API----
/**
 * 可以通过全局的Reflect(反射)API来捕获对应的方法
 *
 *
 */
const target2 = {
  foo: "bar",
};
const handler2 = {
  get(trapTarget, property, receiver) {
    console.log(trapTarget === target2);
    console.log(property);
    console.log(receiver === proxy2);
  },
};
const proxy2 = new Proxy(target2, handler2);
proxy2.foo;

const handler3 = {
  // get(){ return Reflect.get(...arguments) }
  get: Reflect.get,
};
//将每个方法转发给对应反射 API 的空代理
const proxy3 = new Proxy(target, Reflect);
