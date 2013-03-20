
;(function() {
'use strict';

/*!
 * Module dependencies.
 */

var toString = Object.prototype.toString
  , slice = Array.prototype.slice

/**
 * Determine if an object is empty
 *
 * @param {Object} target
 * @returns {Boolean} empty
 */

function isEmpty(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) return false
  }
  return true
}

/**
 * Clone, sort, and stringify an array
 *
 * @param {Array} target
 * @returns {String} sorted stringified
 */

function cloneSort(obj) {
  return obj.slice(0).sort().toString()
}

/**
 * Find the difference in any number of objects
 *
 * @param {Object} original object
 * @param {...} objects to compare
 * @returns {Object} diff results
 */

function diff(old) {
  var resp = {}, tmp
    , args = slice.call(arguments, 1)

  for (var i = 0; i < args.length; i++) {
    var source = args[i]
    for (var prop in source) {
      var val = old[prop]
        , cmp = source[prop]
        , valType = toString.call(val)

      // Ensure valid property
      if (!source.hasOwnProperty(prop)) continue

      // Type checking
      if (valType !== toString.call(cmp)) {
        resp[prop] = cmp
      // Nested objects
      } else if (valType === '[object Object]') {
        tmp = diff(val, cmp)
        if (!isEmpty(tmp)) {
          resp[prop] = tmp
        }
      // Array comparison
      } else if (valType === '[object Array]') {
        if (cloneSort(val) !== cloneSort(cmp)) {
          resp[prop] = cmp
        }
      // Value comparison
      } else if (val !== cmp) {
        resp[prop] = cmp
      }
    }
  }
  // Find missing properties
  for (var prop in old) {
    if (!old.hasOwnProperty(prop)) continue
    for (var i = 0; i < args.length; i++) {
      var source = args[i]
      if (!source.hasOwnProperty(prop) && !resp.hasOwnProperty(prop)) {
        resp[prop] = old[prop]
      }
    }
  }
  return resp
}

/*!
 * Module exports.
 */

if (typeof exports !== 'undefined') {
  module.exports = diff
} else {
  this.diff = diff
}

}).call(this);
