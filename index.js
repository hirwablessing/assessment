/**
 * Returns true if the number is negative or odd and false otherwise.
 * @param {stringOrNumber} value    String or Number
 * 
 * @returns {boolean}               Boolean
 * 
 * @example
 * isNegativeOrOdd('') -> false
 * isNegativeOrOdd(-2) -> true
 */
const isNegativeOrOdd = (value) => {

  return if(value < 0 || value %2 !==0)
}
// isNegativeOrOdd('')
// isNegativeOrOdd(-2)
/**
 * Returns boolean of whether argument is classified as an Array object
 * @param {array} value     Array or other value
 * 
 * @returns {boolean}       Boolean
 * 
 * @example
 * isArray(2); → false
 * isArray([0,3,6,9]); → true
 */
const isArray = (value) => {
  return Array.isArray(value)
}
// isArray([0,3,6,9])
// isArray(2)
/**
 * Returns boolean of whether argument is classified as an Object
 * @param {object} value    Object or other value
 * 
 * @returns {boolean}       Boolean
 * 
 * @example
 * isObject(7); → false
 * isObject([2,4,6,8]); → true
 */
const isObject = (value) => {
  return (typeof value === "object")

}
// isObject([2,4,6,8]) //in the []
/**
 * Returns a string that is the reverse of the inputted string.
 * @param {string} str       String
 * 
 * @returns {string}            Reversed string
 * 
 * @example
 * reverseString('string') -> 'gnirts';
 */
const reverseString = (str) => {
  return value.split("").reverse().join("");
}
// reverseString('string') // simple reverse string; split each character, reverse splited and then join back.

/**
 * Returns a new object with key and values switched
 * @param {object} object       Object
 * 
 * @returns {object}            Object with reversed key property pairs
 * 
 * @example
 * reverseObject({a: 1, b: true, z: []}) -> { 1: 'a', true: 'b', '': 'z' } 
 */
const reverseObject = (object) => {
      let result = {};
  for(let key in object){
    result[object[key]] = key; // object become key and key become value 
    
  }
  return result;
}
// console.log(reverseObject({a: 1, b: true, z: []}))
/**
 * Creates a shallow clone of an object.
 * @param {collection} value        Array or Object
 * 
 * @returns {object}                Shallow-cloned Array or Object
 * 
 * @example
 * const users = [{ 'user': 'barney' },{ 'user': 'fred' }];
 * const shallowClone = clone(users);
 * shallowClone === users -> false
 * shallowClone[0] === users[0] → true
 */
const clone = (value) => {
return {...value}
}
// const users = [{ 'user': 'barney' },{ 'user': 'fred' }]
// const shallowClone = clone(users)
// console.log(shallowClone === users)
// console.log(shallowClone[0] === users[0])
/**
 * Gets the index at which the first occurrence of value is found in array.
 * @param {array} array         Array
 * @param {value} value         String or Number or Null or Undefined
 * 
 * @returns {number}            Index position of first occurrence, -1 if not foun
 * 
 * @example
 * indexOf([true,28,3103], true); → 0
 * indexOf([{},'22',null], 5); → -1
 */
const indexOf = (array, value) => {
  return array.indexOf(value) // indexOf tells the which index it is from
}
// indexOf([true,28,3103], true)
/**
 * Returns an array containing the elements from array1 that are not in array2
 * @param {array} array1        Array
 * @param {array} array2        Array
 * 
 * @returns {array}             Array of unique values
 * 
 * @example
 * difference([0,1,2,3,4,5],[3,5]); -> [0,1,2,4]
 */
const difference = (array1, array2) => {
  return array1.filter( el => !array2.includes(el)) // dont include ele form array2
}
// difference([0,1,2,3,4,5],[3,5]);
/**
 * Iterates over elements of an array invoking callback for each element.
 * The callback is passed the element, the current index, and the entire array in that order.
 * @param {array} array         Array
 * @param {callback} cb         Function
 * 
 * @returns {undefined}         Undefined
 * 
 * @example
 * const callback = (element, index, array) => console.log(element + "," + index + "," + array);
 * forEach(['One', 'Two'], callback); → prints One,0,[One,Two] , Two,1,[One,Two]
 */
const forEach = (array, cb) => {
  for (let i = 0; i < array.length; i += 1) {
    cb(array[i], i, array);
  }
}
// const callback = (element, index, array) => console.log(element + "," + index + "," + array);
// forEach(['One', 'Two'], callback); 
/**
 * Creates an array of values by running each element in array through callback
 * The callback is passed the element, the current index, and the entire array in that order.
 * @param {array} array         Array
 * @param {callback} cb         Function
 * 
 * @returns {array}         Array of callback results using array value as arguments
 * 
 * @example
 * map([8,10,20], function(element, index, array) {
 *  return element * 3;
 * }); -> [24,30,60]
 */
const map = (array, cb) => {
  let arr = [];
    for (var i = 0; i < array.length; i++)
        arr.push(cb(array[i], i, array));
    return arr;
}
  // map([8,10,20], function(element, index, array) {
  //  return element * 3;
  // });
/**
 * Iterates over elements of collection returning an array of all the elements callback returns truthy for.
 * @param {collection} collection   Array or Object
 * @param {callback} cb             Function
 * 
 * @returns {array}                 Array of filtered values
 * 
 * @example
 * filter([1,2,3,4], function(element, index, array) {
 *      return element % 2 === 0;
 * }); → [2,4]
 * filter({a: 1, b: 2,c: 3,d: 4}, function(value, key, collection) {
 *      return element % 2 !== 0;
 * }); → {a: 1, c: 3}
 */
const filter = (collection, cb) => {
  let arr = [];
    for (var i = 0; i < collection.length; i++) {
        if (cb.call(cb, collection[i], i, collection)) // .call control the value of the obj, in callback
            arr.push(collection[i]);
    }
    return arr;
}
  // filter([1,2,3,4], function(element, index, array) {
  //      return element % 2 === 0;
  // }); 
  //  filter({a: 1, b: 2,c: 3,d: 4}, function(value, key, collection) {
  //      return value % 2 !== 0;
  // })
/**
 * Removes all elements from array that callback returns truthy for and returns an array of the 
 * remaining elements.
 * @param {array} array         Array
 * @param {callback} cb         Function
 * 
 * @returns {collection}        Array or Object of filtered results
 * 
 * @example
 * reject([1,2,3,4], function(element, index, collection) {
 *      return element % 2 === 0;
 * }); → [1,3]
 * reject({a:1, b:2, c:3, d:4}, function(value, key, collection) {
 *      return element % 2 !== 0;
 * }); → {b:2, d:4}
 */
const reject = (collection, cb) => {
  let arr = [];
    for (let i = 0; i < collection.length; i++) {
        if (!cb.call(cb, collection[i], i, collection)) 
            arr.push(collection[i])
    }
    return arr;
}

/**
 * Creates an array without duplicate values. The order of the array is preserved.
 * @param {array} array     Array
 * 
 * @returns {array}         Array without duplicate values
 * 
 * @example
 * uniq([10,20,10]); → [10,20]
 */
const uniq = (array) => {
let newArr = [];
for (let i = 0; i < array.length; i++){
  if(newArr.indexOf(array[i]) === -1) { //research = -1
    newArr.push(array[i])
  }
} return newArr

// or by using the Set constructor

return [...new Set(array)];
}
// console.log(uniq([10,20,10,20,30,10]))
/**
 * Remove leading and trailing whitespace removed.
 * @param {string} string           String
 * 
 * @returns {string}                String with whitespace removed.
 * 
 * @example
 * trim(' momma '); -> 'momma'
 * trim('   SPARTAAA '); -> 'SPARTAAA'
 */
const trim = (string) => {
  // return string.replace(/ /g,'')
  return string.trim()
  // return string
}

/**
 * Reduces collection to a value which is the accumulated result of running each
 * element in collection through iteratee, where each successive invocation is
 * supplied the return value of the previous. If accumulator is not provided the
 * first element of collection is used as the initial value.
 * If a start parameter is not provided, then set the start value as the zeroth index.
 * @param {array} array             Array
 * @param {callback} cb             Function
 * @param {number} [start=0]        Number
 * 
 * @returns {value}                 String, Number, or other value
 * 
 * @example
 * reduce([4,5], function(stored,current) {
 *      return stored + current;
 * }); → 9
 * reduce(['this ', 'is SPARTA'], function(stored,current) {
 *      return stored + current;
 * },'quote: '); → 'quote: this is SPARTA'
 */
const reduce = (array, cb, start) => {
    if (Array.isArray(array)) {
    let acc;
    if (start === undefined) {
      acc = array[0];
      array = array.slice(1);
    }else {
      acc = start;
    }
    array.forEach(function(el) {
      acc = cb(acc, el);
    });
    return acc;
  }
}


  // reduce([4,5], function(stored,current) {
  //      return stored + current;
  // });
  // console.log(reduce(['this ', 'is SPARTA'], function(stored,current) {
  //      return stored + current;
  // },'quote: '))
/**
 * Recursively flattens a nested array.
 * @param {array} array         Array of nested arrays
 * 
 * @returns {array}             Array of nested arrays flattened to one dimension
 * 
 * @example
 * flattenArrayDeep([2, [4, 6, [8]]]); → [2, 4, 6, 8]
 */
const flattenArrayDeep = (array, result = []) => {

}
flattenArrayDeep([2, [4, 6, [8]]]);
/**
 * Assigns own enumerable properties of source object(s) to the destination object
 * Subsequent sources overwrite property assignments of previous sources.
 * @param {objects} [objects]       Objects to source values from
 * 
 * @returns {object}                Object of the extended values
 * 
 * @example
 * extend({ 'user': 'Joe' }, { 'age': 25 }, { 'user': 'Sarah' }); → { 'user': 'Sarah', 'age': 25 }
 */
const extend = (...objects) => {

}

/**
 * Creates a deep clone of a collection (full layers deep).
 * @param {object} value        Object to deep clone
 * 
 * @returns {object}            Deep clone of object
 * 
 * @example
 * const users = [{ 'user': 'Joe' },{ 'user': 'Sarah' }];
 * const deepClone = cloneObjectDeep(users)
 * deepClone === users → false
 * deepClone[0] === users[0] → false
 * deepClone[0].user === users[0].user → true
 */
const cloneObjectDeep = (value) => {
  return JSON.parse(JSON.stringify(value));
}

/**
 * Returns a function that only invokes func once per every wait milliseconds
 * (additional calls to func within the wait will not be invoked or queued).
 * @param {function} func       Function to invoke
 * @param {wait} number         Milliseconds to wait in between invocations
 * 
 * @returns {undefined}         Undefined
 * 
 * @example
 * let temp = throttle((n) => {n ** n}, 500);
 * temp(5) -> 25;
 * temp(10) -> undefined
 * // 500ms wait
 * temp(10) -> 100
 */
const throttle = (func, wait) => {

}

/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection through iteratee.
 * @param {array} array             Array of values to sort
 * @param {function} iterator       Function to invoke on every array value
 * 
 * @returns {array}                 Array of ascending results
 * 
 * @example
 * sortBy([1, 2, 3], function(n) {
 *      return Math.sin(n);
 * }); → [3, 1, 2]
 */
const sortBy = (array, iterator) => {

}

/**
 * Returns a list of integers from start (inclusive) to stop (exclusive), incremented (or decremented) by step
 * start defaults to 0, step defaults to 1
 * If you'd like a negative range, use a negative step.
 * @param {number} [start=0]		Start of the range
 * @param {number} stop				End of range
 * @param {number} [step=1]			Incrementing values
 * 
 * @returns {array} 				Array of number values
 * 
 * @example
 * range(10); -> [0,1,2,3,4,5,6,7,8,9]
 * range(1,11); -> [1,2,3,4,5,6,7,8,9,10]
 * range(0,30,5); -> [0,5,10,15,20,25]
 * range(0,-10,-1); -> [0,-1,-2,-3,-4,-5,-6,-7,-8,-9]
 */
const range = (start = 0, stop, step = 1) => {

}

/**
 * Splits array into two arrays based on elements that satisfy the predicate (callback)
 * @param {array} array					Array of values to qualify
 * @param {function} predicate			Function that returns boolean upon evaluating argument
 * 
 * @returns {array of two arrays}		Array of number values
 * 
 * @example
 * partition([0,1,2,3,4,5,6], function(element) {
 * 		return element % 2 === 0;
 * }); -> [[0,2,4,6],[1,3,5]];
 */
const partition = (array, predicate) => {

}

/**
 * Receives a variable number of arrays, and returns an array that contains every item shared between all passed-in arrays
 * @param {array} args 			Arrays of values
 * 
 * @returns {array} 			Array of shared items in all passed in arrays
 * 
 * @example
 * intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]); -> [1,2]
 */
const intersection = (...args) => {

}

/**
 * Returns a function that can be called no more than count times.
 * The result of the last function call is memoized and returned when count has been reached.
 * @param {number} count		Number of times passed-in function can be called
 * @param {function} func		Function to be invoked
 * 
 * @returns {value}				Function invocation value
 * 
 * @example
 * let count = 0;
 * let printAndIncrementCount = function() { console.log(count++) };
 * let beforePrintAndIncrementCount = before(2,printAndIncrementCount);
 * beforePrintAndIncrementCount(); prints 0
 * beforePrintAndIncrementCount(); prints 1
 * beforePrintAndIncrementCount(); prints 1
 * beforePrintAndIncrementCount(); prints 1
 */
const before = (count, func) => {

}

/**
 * Creates arrays. First argument is the length. Second
 * is a callback. The return value of this callback will become the array element. Call
 * the callback with the array index as an argument.
 * @param {number} length				Number length of the desired array
 * @param {function} processor			Function to invoke
 * 
 * @returns {array} 					Fixed-length array of processor-return values
 * 
 * @example
 * let square = function(n) { return n * n; };
 * arrayFactory(4, square); -> [0, 1, 4, 9]
 */
const arrayFactory = (length, processor) => {

}
