var fs = require('fs');
var muk = require('muk');
var rewire = require('rewire');
var lib = require('../index');
var Promise = require('bluebird');


describe('module', function () {
    describe('limit', function () {
        it('limit should success', function () {
            lib.limit(10).should.be.equal(10);
        });
    });
    describe('async', function () {
        this.timeout(10000);
        it('async', function (done) {
            lib.async(function () {
                done();
            });
        });
    });
    //version 1
    describe('getContent', function () {
        var _readFile;
        before(function () {
            _readFile = fs.readFile;
            fs.readFile = function (filename, encoding, callback) {
                process.nextTick(function () {
                    callback(new Error('mock readFile Error'));
                });
            };
        });
        it('should error', function (done) {
            lib.getContent('test.json', function () {
                done();
            });
        });
        after(function () {
            fs.readFile = _readFile;
        });
    });
    //version 2
    describe('getContent', function () {
        before(function () {
            muk(fs, 'readFile', function (path, encoding, callback) {
                process.nextTick(function () {
                    callback(new Error('mock readFile error'));
                });
            });
        });
        it('should error', function (done) {
            lib.getContent('test.json', function () {
                done();
            });
        });
        after(function () {
            muk.restore();
        });
    });
    describe('private function', function () {
        it('limit should return success', function(){
            var rLib = rewire('../lib/mocha-test');
            var adding = rLib.__get__('_adding');
            adding(10, 5).should.be.equal(15);
        });
    });
});

describe('should', function () {
    describe('#Promise', function () {
        it('should.reject', function () {
            (new Promise(function (resolve, reject) {
                reject(new Error('wrong'));
            })).should.be.rejectedWith('wrong');
        });
        it('should fulfilled', function () {
            (new Promise(function (resolve, reject) {
                resolve({username: 'jc', age: 18, gender: 'male'});
            })).should.be.fulfilled().then(function (it) {
                    it.should.have.property('username', 'jc');
                });
        });
    });
});


