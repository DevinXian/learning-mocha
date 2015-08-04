var supertest = require('supertest');
var express = require('express');
var app = express();

app.get('/user', function (req, res) {
    res.status(200).send({name: 'DevinXian'});
});

describe('GET /user', function () {
    it('respond with json', function (done) {
        supertest(app)
            .get('/user').set('Accept', 'application/json')
            .expect('Content-Type', /json/).expect(200)
            .end(function (err, res) {
                if (err) {
                    done(err);
                } else {
                    res.body.name.should.be.eql('DevinXian');
                    done();
                }
            });
    });
});