// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    return '' + obj + '';
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (typeof obj === undefined || typeof obj === 'function') {
    return;
  }

  var intermediate = [];
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      intermediate.push(stringifyJSON(obj[i]));
    }
    return '[' + intermediate.toString() + ']';
  }

  for (var key in obj) {
    if (obj[key] !== undefined && typeof obj[key] !== 'function' && typeof key !== 'function') {
      intermediate.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
  }
  // return '{' + intermediate + '}';

  return '{' + intermediate.toString() + '}';

};
