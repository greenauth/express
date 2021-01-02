"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var express_1 = require("express");
var auth_1 = tslib_1.__importDefault(require("./auth"));
var router = express_1.Router();
router.use('/auth', auth_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map