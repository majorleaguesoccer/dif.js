
var dif = require('./index')
  , assert = require('assert')
  , ase = assert.strictEqual

describe('dif.js', function() {
  it('should work with simple properties', function() {
    var a = {
      foo: 'asdf'
    , bar: 2
    , baz: 3
    }
    var b = {
      foo: 'meow'
    , bar: 2
    , baz: true
    }
    var c = dif(a, b)
    ase(c.foo, 'meow')
    ase(c.bar, undefined)
    ase(c.baz, true)
  })
  
  it('should work with nested objects', function() {
    var a = {
      hi: {
        one: 1
      , two: 2
      , nest: {
          bird: 'bird'
        }
      }
    , another: {
        well: 'there'
      }
    , thing: {
        meow: {
          a: 20
        }
      }
    }
    var b = {
      hi: {
        one: 1
      , two: 2
      , nest: {
          bird: 'bird'
        }
      }
    , another: true
    , thing: {
        cat: 20
      , meow: {
          a: 'hi'
        }
      }
    }
    var c = dif(a, b)
    ase(c.hi, undefined)
    ase(c.another, true)
    ase(c.thing.cat, 20)
    ase(c.thing.meow.a, 'hi')
  })
  
  it('should work with arrays', function() {
    var a = {
      foo: [1,2,3]
    , bar: ['a', 'b', true]
    , baz: ['1', true, 30]
    }
    var b = {
      foo: [2,3,1]
    , bar: [true, 'a', 'b']
    , baz: ['2', false, '20']
    }
    var c = dif(a, b)
    ase(c.foo, undefined)
    ase(c.bar, undefined)
    ase(c.baz.toString(), '2,false,20')
    ase(c.baz[1], false)
  })

  it('should work with missing properties', function() {
    var a = {
      hi: 'there'
    }
    var b = {
      hello: 'you'
    , whats: 'up?'
    }
    var c = dif(a, b)
    ase(c.hi, 'there')
    ase(c.hello, 'you')
    ase(c.whats, 'up?')
  })
})
