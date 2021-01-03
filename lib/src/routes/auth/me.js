"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var express_1 = require("express");
var protected_1 = tslib_1.__importDefault(require("../../protected"));
/**
 * Route for get user logged data.
 * @param {Request} req Request param.
 * @param {Response} res Response param.
 * @return {Response}
 */
function me(req, res) {
    return res.json(req.auth.user);
}
var router = express_1.Router();
router.get('/', protected_1.default, me);
exports.default = router;
//# sourceMappingURL=me.js.map