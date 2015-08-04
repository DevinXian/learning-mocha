###Mocha BDD interface:
    describe()
    it()
    before()
    after()
    beforeEach()
    afterEach()

###Assert packages:
    should.js
    chai
    expect.js


###Promise interface in should.js:
    finally | eventually
    fulfilled
    fulfilledWith
    rejected
    rejectedWith
    then

###mocha test timeout setup
    mocha -t (ms)
    programming
        describe('async', function(){
            this.timeout(20000);
            it...
        });

###private function test: rewire
    var my = rewire('../{your module}');

###web application framework test( express etc.): supertest

###code coverage check : 
	module: istanbul, script: "istanbul cover ./node_modules/mocha/bin/_mocha ( -- test/test.js -R spec)"

report includes:

	1.	line coverage
	2.	function coverage
	3.	branch coverage
	4.	statement coverage

questions:

    https://github.com/gotwarlost/istanbul/issues/90

#####*Without Makefile and Travis-cli :)*