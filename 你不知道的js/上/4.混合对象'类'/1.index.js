//
function mixin(sourceObj, targetObj) {
  for (let key in sourceObj) {
    if (!(key in targetObj)) {
      targetObj[key] = sourceObj[key];
    }
  }
  return targetObj;
}
var Vehicle = {
  engines: 1,
  ignition: function () {
    console.log("--turning my engine");
  },
  drive: function () {
    this.ignition();
    console.log("--steering and moving");
  },
};
var Car = mixin(Vehicle, {
  wheels: 4,
  drive: function () {
    //   显示多态
    Vehicle.drive.call(this);
    console.log("---sub--rolling on calll", this.wheels + " wheels!");
    return "moving on";
  },
});
console.log(111, Car.drive(), Car.engines);
