"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite_1 = require("sqlite");
const sqlite3_1 = require("sqlite3");
async function openDB() {
    return (0, sqlite_1.open)({
        filename: './src/database/database.db',
        driver: sqlite3_1.Database,
    });
}
exports.default = openDB;
//# sourceMappingURL=sqlite.js.map