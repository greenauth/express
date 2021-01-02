"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jwt = tslib_1.__importStar(require("jsonwebtoken"));
var index_1 = tslib_1.__importDefault(require("./index"));
/**
   * Middleware that checks if there is an active user
   * @param {Request} req
   * @param {Response} res
   * @param {Function} next
   * @return {Function}
   */
function isProtected(req, res, next) {
    if (!req.headers.authorization)
        return res.sendStatus(401);
    try {
        var token = jwt.verify(req.headers.authorization.split(' ')[1], index_1.default._secret);
        req.auth = { token: token };
        return next();
    }
    catch (error) {
        return res.sendStatus(401);
    }
}
exports.default = isProtected;
//# sourceMappingURL=protected.js.map