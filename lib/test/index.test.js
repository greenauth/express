"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var supertest_1 = tslib_1.__importDefault(require("supertest"));
var express_1 = tslib_1.__importDefault(require("express"));
var jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
var index_1 = tslib_1.__importDefault(require("../src/index"));
describe('Verify that the `auth/me` path responds correctly', function () {
    var app;
    var token = "Bearer " + jsonwebtoken_1.default.sign({ uid: 1 }, 'secret');
    beforeAll(function () {
        app = express_1.default();
        var greenAuthServer = new index_1.default({ secret: 'secret' });
        app.use(greenAuthServer.initialize());
    });
    test('It should return a status 401', function (done) {
        supertest_1.default(app)
            .get('/auth/me')
            .then(function (response) {
            expect(response.statusCode).toBe(401);
            done();
        });
    });
    test('It should return a status 401 with invalid token', function (done) {
        supertest_1.default(app)
            .get('/auth/me')
            .set('Authorization', 'token')
            .then(function (response) {
            expect(response.statusCode).toBe(401);
            done();
        });
    });
    test('It should return a status 200', function (done) {
        supertest_1.default(app)
            .get('/auth/me')
            .set('Authorization', token)
            .then(function (response) {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});
//# sourceMappingURL=index.test.js.map