"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isProtected = void 0;
var tslib_1 = require("tslib");
var express_1 = require("express");
var routes_1 = tslib_1.__importDefault(require("./routes"));
var protected_1 = require("./protected");
Object.defineProperty(exports, "isProtected", { enumerable: true, get: function () { return tslib_1.__importDefault(protected_1).default; } });
/**
 * Server middleware.
 */
var GreenAuthServer = /** @class */ (function () {
    /**
     * Build an instance of `GreenAuthServer`.
     * @param {{ app: Application }} config The second number.
     */
    function GreenAuthServer(config) {
        // Methods
        /**
         * Initialize the middleware
         * @return {Router} return a router middleware.
         */
        this.initialize = function () {
            var router = express_1.Router();
            router.use(routes_1.default);
            return routes_1.default;
        };
        GreenAuthServer._secret = config.secret;
    }
    return GreenAuthServer;
}());
exports.default = GreenAuthServer;
//# sourceMappingURL=index.js.map