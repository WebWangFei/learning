self.postMessage('foo');
self.close();
// 工作者线程不需要执行同步停止,只会停止异步的任务
self.postMessage('bar');
setTimeout(() => {
  self.postMessage('baz');
}, 0);
