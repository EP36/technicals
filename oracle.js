function randomlyThrowError(x, y) {
  var i = Math.round(Math.random() * x);

  if (i % 2 === 0) {
    console.log(x, y);
  } else {
    throw new Error();
  }

}

function makeSafe(fn) {
  // Code goes here
  const closure = (...a) => {
    try {
      fn(...a)
    } catch (e) {
      console.log('error')
    }
  }
  return closure;
}

// Get safe version of function
var safeFunction = makeSafe(randomlyThrowError);

// Safely call function
safeFunction(2, 4);
safeFunction(10);
safeFunction(120);
safeFunction(23);
safeFunction(5454);
safeFunction(2794);
