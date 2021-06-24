const a1 = require('./b');
const a2 = require('./b');
console.log('-log- ~ a', a1);
console.log('-log- ~ a', a2);
// 模块永远是单例，只会加载一次，第一次加载后会缓存
// 模块加载是同步操作，所以可以通过条件来控制加载不同的模块
console.log('a1~~a2', a1 === a2);
