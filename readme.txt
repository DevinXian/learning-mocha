Mocha BDD interface:
    describe()
    it()
    before()
    after()
    beforeEach()
    afterEach()

Assert packages:
    should.js
    chai
    expect.js


Promise interface in should.js:
    finally | eventually
    fulfilled
    fulfilledWith
    rejected
    rejectedWith
    then

mocha test timeout setup
    mocha -t (ms)
    programming
        describe('async', function(){
            this.timeout(20000);
            it...
        });

private function test: rewire
    var my = rewire('../own module');


