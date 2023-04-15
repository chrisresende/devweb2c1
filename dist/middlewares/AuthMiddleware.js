"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isAutheticated = true;
const isManager = false;
function AuthMiddleware(req, res, next) {
    if (isAutheticated) {
        next();
    }
    else {
        res.status(403).json({ message: 'Forbidden' });
    }
}
function ManagerMiddleware(req, res, next) {
    if (isManager) {
        next();
    }
    else {
        res.status(405).json({ message: 'Not Allowed' });
    }
}
exports.default = { AuthMiddleware, ManagerMiddleware };
//# sourceMappingURL=AuthMiddleware.js.map