/**
 * (c) 2012 Major League Soccer
 * MIT Licensed
 * For all details and documentation:
 * https://github.com/majorleaguesoccer/dif.js
 */

;(function() {
'use strict';

/*!
 * Module dependencies.
 */

var toString = Object.prototype.toString
  , slice = Array.prototype.slice

/**
 * Get all defaults
 *
 * @param {Object} options hash
 * @api private
 */

function defaults(options) {
  var opt = {
    preserveDefaults: true
  }
  options = options || {}
  for (var prop in options) {
    opt[prop] = options[prop]
  }
  return opt
}

/**
 * Determine if an object is empty
 *
 * @param {Object} target
 * @returns {Boolean} empty
 * @api private
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
 * @api private
 */

function cloneSort(obj) {
  return obj.slice(0).sort().toString()
}

/**
 * Find the difference between two objects
 *
 * @param {Object} original object
 * @param {Object} objects to compare
 * @param {Object} options hash (optional)
 * @returns {Object} diff results
 */

function dif(old, source, options, preserve) {
  var resp = {}, tmp
  options = defaults(options)
  // Ensure valid arguments
  ;[old, source, options].forEach(function(test) {
    if (toString.call(test) !== '[object Object]') {
      throw new TypeError('Dif arguments must be objects')
    }
  })
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
      tmp = dif(val, cmp, options, options.preserveNested)
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
  // Find missing properties
  for (var prop in old) {
    if (!old.hasOwnProperty(prop)) continue
    if (!source.hasOwnProperty(prop) && !resp.hasOwnProperty(prop)) {
      resp[prop] = old[prop]
    }
  }
  return resp
}

/*!
 * Module exports.
 */

if (typeof exports !== 'undefined') {
  module.exports = dif
} else {
  this.dif = dif
}

}).call(this);