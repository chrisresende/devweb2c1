"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite_1 = require("../database/sqlite");
async function getAll() {
    try {
        const db = await (0, sqlite_1.default)();
        const result = await db.get('SELECT nome FROM alunos');
        return result;
    }
    catch (error) {
        console.log(error);
    }
}
exports.default = getAll;
//# sourceMappingURL=getAll.js.map