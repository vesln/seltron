/**
 * Core dependencies.
 */

var path = require('path');
var spawn = require('child_process').spawn;

/**
 * Seltron path.
 */

var root = path.join(__dirname, '..', 'selenium/');

/**
 * Selenium.
 */

var server = root + 'selenium-server-standalone.jar';

/**
 * ChromeDriver.
 */

var chromedriver = root + 'chromedriver';

/**
 * Spawn a new Selenium instance.
 *
 * @param {String} type
 * @param {Number} port
 * @api public
 */

function seltron(type, port, fn) {
  var commands = Object.create(null);
  var done = false;
  var process = null;

  if (arguments.length === 2) {
    fn = port;
    port = null;
  }

  port = port || 4444;

  commands.phantomjs = {
    ready: /running on port/,
    main: 'phantomjs',
    args: ['--webdriver',  port, '--ignore-ssl-errors=true']
  };

  commands.firefox = {
    ready: /Started SocketListener/,
    main: 'java',
    args: ['-jar', server, '-port', port]
  };

  commands.chrome = {
    ready: /Started SocketListener/,
    main: 'java',
    args: ['-jar', server, '-port',  port, '-Dwebdriver.chrome.driver=' + chromedriver]
  };

  if (!commands[type]) {
    throw new Error('I do not know how to handle ' + type);
  }

  process = spawn(commands[type].main, commands[type].args);

  process.on('close', function() {
    if (done) return;
    done = true;
    fn(new Error('There was a problem with starting the process'));
  });

  process.stdout.on('data', function(chunk) {
    if (done) return;
    if (commands[type].ready.test(chunk + '')) {
      done = true;
      fn(null, process);
    }
  });
}

/**
 * Primary export.
 */

module.exports = seltron;
