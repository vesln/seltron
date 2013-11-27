var seltron = require('..');
var ChildProcess = require('child_process').ChildProcess;

describe('seltron', function() {
  it('returns a child process', function(done) {
    seltron('phantomjs', function(err, process) {
      should.not.exist(err);
      process.kill();
      done();
    });
  });

  it('returns an error when there is one', function(done) {
    seltron('phantomjs', function(err, first) {
      seltron('phantomjs', function(err, second) {
        first.kill();
        err.should.be.ok;
        done();
      });
    });
  });

  it('return an error when unknown type is supplied', function(done) {
    seltron('invalid', function(err) {
      err.should.be.ok;
      done();
    });
  });
});
