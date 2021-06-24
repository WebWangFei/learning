const worker = new Worker('./closeWorke.js');
worker.onmessage = ({ data }) => console.log(111, data);
// 111 "foo"
// 111 "bar"
