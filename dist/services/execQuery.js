"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite_1 = require("../database/sqlite");
async function execQuery(query) {
    try {
        const db = await (0, sqlite_1.default)();
        const result = await db.exec(query);
        return result;
    }
    catch (error) {
        console.log(error);
    }
}
async function getAll(query) {
    try {
        const db = await (0, sqlite_1.default)();
        const result = await db.all(query);
        return result;
    }
    catch (error) {
        console.log(error);
    }
}
exports.default = { execQuery, getAll };
//# sourceMappingURL=execQuery.js.map