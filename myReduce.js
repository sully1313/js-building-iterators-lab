// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback, init) {

  var i = 0;
  var prevValue;

  if(typeof(init) == 'undefined') {
    i++;
    prevValue = arr[0];
  } else {
    prevValue = init;
  }
  for  (; i < arr.length; i++) {
    prevValue = callback(prevValue, arr[i], i, arr);
  }
  return prevValue;
}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;
