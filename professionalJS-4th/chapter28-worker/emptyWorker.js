console.log(111, location.href.substring(0, location.href.length - 9) + 'emptyWorker.js');
const worker = new Worker(location.href + 'emptyWorker.js');
console.log(11, worker);
