
Dif.js
======

[![Build Status](https://secure.travis-ci.org/majorleaguesoccer/dif.js.png)](http://travis-ci.org/majorleaguesoccer/dif.js) 

Find the difference between two objects.


Usage
-----

Node.js

```js
var diff = require('diff')
```

Browser

```html
<script src="diff.min.js"></script>
```


Example
-------

```js
var a = {foo: 1, bar: 2}
var b = {bar: 4, baz: true}
var c = diff(a, b)
// {
//   foo: 1
// , bar: 4
// , baz: true
// }
```


Install
-------

With [npm](https://npmjs.org)

```
npm install diff
```


License
-------

(The MIT License)

Copyright (c) 2013 Major League Soccer

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.