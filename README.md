[![NPM version](https://badge.fury.io/js/seltron.png)](http://badge.fury.io/js/seltron)
[![Build Status](https://secure.travis-ci.org/vesln/seltron.png)](http://travis-ci.org/vesln/seltron)
[![Coverage Status](https://coveralls.io/repos/vesln/seltron/badge.png?branch=master)](https://coveralls.io/r/vesln/seltron?branch=master)
[![Code Climate](https://codeclimate.com/github/vesln/seltron.png)](https://codeclimate.com/github/vesln/seltron)

# Important Notice

I'm no longer actively maintaining this project. If you are interested supporting it - [ping me on twitter](https://twitter.com/vesln).
The only thing that I will ask you is to not change the API drastically. If you are planning on doing that - better start a brand new project.

If you want me to transfer you only the name on npm, I'd be happy to only if the project **does not have any downloads on npm lately**. In case it's being
downloaded, there are people that depend on it and might step up and start maintaining, so I will not transfer it to you, regardless if you want to release
a new major version etc.

If you have any other questions, let me know.

Thanks!

Veselin

# seltron

## Synopsis

Tiny Selenium spawner.

## Supported drivers

- Chrome (chrome)
- Firefox (firefox)
- Phantomjs (phantomjs)

## Requirements

- java (to run Selenium)
- wget (to download Selenium)
- phantomjs, Firefox, Chrome (pick what you want to use)

## Usage

```js
seltron('phantomjs', 9002, function(err, process) {
  if (err) throw err;
  // start testing!

  // done? kill it!
  process.kill();
});
```

You can skip `port` if you wish, it will run Selenium on 4444.

## Installation

```bash
npm install seltron
```

## Installing Selenium & ChromeDriver

```bash
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
