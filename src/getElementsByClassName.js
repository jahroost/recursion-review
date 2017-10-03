// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var output = [];
  var getClassName = function(element) {
    if (element.classList && element.classList.contains(className)) {
      output.push(element);
    }
    element.childNodes.forEach(function(child) {
      getClassName(child);
    });
  };
  getClassName(document.body);
  return output;
};
