[![NPM version](https://badge.fury.io/js/seltron.png)](http://badge.fury.io/js/seltron)
[![Build Status](https://secure.travis-ci.org/vesln/seltron.png)](http://travis-ci.org/vesln/seltron)
[![Coverage Status](https://coveralls.io/repos/vesln/seltron/badge.png?branch=master)](https://coveralls.io/r/vesln/seltron?branch=master)
[![Code Climate](https://codeclimate.com/github/vesln/seltron.png)](https://codeclimate.com/github/vesln/seltron)

# seltron

## Synopsis

Tiny Selenium spawner.

## Supported drivers

- Chrome
- Firefox
- Phantomjs

## Usage

```js
seltron('phantomjs', 9002, function(err, process) {
  if (err) throw err;
  // start testing!

  // done? kill it!
  process.kill();
});
```

## Installation

```bash
npm install seltron
```

## Installing Selenium & ChromeDriver

```bash
$ git clone vesln/seltron
$ ./node_modules/seltron/bin/install-selenium
```

## Tests

### Running the tests

```bash
$ npm test
```

### Test coverage

```bash
$ npm run-script coverage
```

## License

(The MIT License)

Copyright (c) 2013 Veselin Todorov <hi@vesln.com>

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
