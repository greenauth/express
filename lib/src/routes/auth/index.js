"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var express_1 = require("express");
var me_1 = tslib_1.__importDefault(require("./me"));
var router = express_1.Router();
router.use('/me', me_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map