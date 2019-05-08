// custom forEach function

module.exports = function customForEach(callback) {
  for (var index = 0; index < this.length; index++) {
    callback(this[index], index, this);
  }
};

// custom map function

module.exports = function customMap(callback) {
  var newArray = [];
  for (var index = 0; index < this.length; index++) {
    var element = callback(this[index], index, this);
    newArray.push(element);
  }
  return newArray;
};
