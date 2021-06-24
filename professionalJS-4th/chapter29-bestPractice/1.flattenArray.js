function flatten(sourceArray, flattenedArray = []) {
  for (const element of sourceArray) {
    if (Array.isArray(element)) {
      flatten(element, flattenedArray);
    } else {
      flattenedArray.push(element);
    }
  }
  return flattenedArray;
}
// const arr = [[0], 1, 2, [3, [4, 5]], 6];
const arr = [2, 1, [{ name: 'draben' }, { name: 'test1' }], [{ name: 'miya' }]];
console.log(flatten(arr)); // [0, 1, 2, 3, 4, 5, 6]

// -----------新增打平到第几层

function flattenLevel(sourceArray, depth, flattenedArray = []) {
  for (const element of sourceArray) {
    if (Array.isArray(element) && depth > 0) {
      flattenLevel(element, depth - 1, flattenedArray);
    } else {
      flattenedArray.push(element);
    }
  }
  return flattenedArray;
}
const arr1 = [[0], 1, 2, [3, [4, 5]], 6];
console.log(flattenLevel(arr1, 1)); //[ 0, 1, 2, 3, [ 4, 5 ], 6 ]
