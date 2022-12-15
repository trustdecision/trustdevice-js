// fix for ie
if (!window.console) {
  window.console = {}
}
if (!console.log) {
  console.log = function log() {}
}
if (typeof Object.assign !== 'function') {
  (function () {
    Object.assign = function (target) {
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert undefined or null to object')
      }

      const output = Object(target)
      for (let index = 1; index < arguments.length; index++) {
        const source = arguments[index]
        if (source !== undefined && source !== null) {
          for (const nextKey in source) {
            // eslint-disable-next-line no-prototype-builtins
            if (source.hasOwnProperty(nextKey)) {
              output[nextKey] = source[nextKey]
            }
          }
        }
      }
      return output
    }
  }())
}
if (!Array.from) {
  Array.from = function (el) {
    return Array.apply(this, el)
  }
}
// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.io/#x15.4.4.18
if (!Array.prototype.forEach) {
  /* eslint-disable no-extend-native */
  Array.prototype.forEach = function forEach(callback) {
    let T
    let k

    if (this == null) {
      throw new TypeError('this is null or not defined')
    }

    // 1. Let O be the result of calling toObject() passing the
    // |this| value as the argument.
    const O = Object(this)

    // 2. Let lenValue be the result of calling the Get() internal
    // method of O with the argument "length".
    // 3. Let len be toUint32(lenValue).
    const len = O.length >>> 0

    // 4. If isCallable(callback) is false, throw a TypeError exception.
    // See: http://es5.github.com/#x9.11
    if (typeof callback !== 'function') {
      throw new TypeError(`${callback} is not a function`)
    }

    // 5. If thisArg was supplied, let T be thisArg; else let
    // T be undefined.
    if (arguments.length > 1) {
      /* eslint-disable prefer-destructuring */
      T = arguments[1]
    }

    // 6. Let k be 0.
    k = 0

    // 7. Repeat while k < len.
    while (k < len) {
      let kValue

      // a. Let Pk be ToString(k).
      //    This is implicit for LHS operands of the in operator.
      // b. Let kPresent be the result of calling the HasProperty
      //    internal method of O with argument Pk.
      //    This step can be combined with c.
      // c. If kPresent is true, then
      if (k in O) {
        // i. Let kValue be the result of calling the Get internal
        // method of O with argument Pk.
        kValue = O[k]

        // ii. Call the Call internal method of callback with T as
        // the this value and argument list containing kValue, k, and O.
        callback.call(T, kValue, k, O)
      }
      // d. Increase k by 1.
      k++
    }
    // 8. return undefined.
  }
}

// Production steps of ECMA-262, Edition 5, 15.4.4.19
// Reference: http://es5.github.io/#x15.4.4.19
if (!Array.prototype.map) {
  Array.prototype.map = function map(callback/* , thisArg */) {
    let T
    let k

    if (this == null) {
      throw new TypeError('this is null or not defined')
    }

    const O = Object(this)

    const len = O.length >>> 0

    if (typeof callback !== 'function') {
      throw new TypeError(`${callback} is not a function`)
    }

    if (arguments.length > 1) {
      T = arguments[1]
    }

    const A = new Array(len)

    k = 0

    while (k < len) {
      let kValue
      let mappedValue

      if (k in O) {
        kValue = O[k]

        mappedValue = callback.call(T, kValue, k, O)

        A[k] = mappedValue
      }
      k++
    }

    return A
  }
}

if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function indexOf(member, startFrom) {
    /*
    In non-strict mode, if the `this` variable is null or undefined, then it is
    set to the window object. Otherwise, `this` is automatically converted to an
    object. In strict mode, if the `this` variable is null or undefined, a
    `TypeError` is thrown.
    */
    if (this == null) {
      throw new TypeError(`Array.prototype.indexOf() - can't convert \`${this}\` to object`)
    }

    /* eslint-disable no-restricted-globals, no-new-object */
    let index = isFinite(startFrom) ? Math.floor(startFrom) : 0
    const that = this instanceof Object ? this : new Object(this)
    const length = isFinite(that.length) ? Math.floor(that.length) : 0

    if (index >= length) {
      return -1
    }

    if (index < 0) {
      index = Math.max(length + index, 0)
    }

    if (member === undefined) {
      /*
        Since `member` is undefined, keys that don't exist will have the same
        value as `member`, and thus do need to be checked.
      */
      do {
        if (index in that && that[index] === undefined) {
          return index
        }
      } while (++index < length)
    } else {
      do {
        if (that[index] === member) {
          return index
        }
      } while (++index < length)
    }

    return -1
  }
}

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
if (!Object.keys) {
  Object.keys = (function keys() {
    const hasOwnProperty = Object.prototype.hasOwnProperty
    /* eslint-disable no-prototype-builtins */
    const hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString')
    const dontEnums = [
      'toString',
      'toLocaleString',
      'valueOf',
      'hasOwnProperty',
      'isPrototypeOf',
      'propertyIsEnumerable',
      'constructor',
    ]
    const dontEnumsLength = dontEnums.length

    return function cb(obj) {
      if (typeof obj !== 'function' && (typeof obj !== 'object' || obj === null)) {
        throw new TypeError('Object.keys called on non-object')
      }

      const result = []
      let prop
      let i

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop)
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i])
          }
        }
      }
      return result
    }
  }())
}
