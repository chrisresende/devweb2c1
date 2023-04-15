"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const execQuery_1 = require("../execQuery");
async function listarAlunos() {
    try {
        const result = await execQuery_1.default.getAll('SELECT nome FROM alunos');
        return result;
    }
    catch (error) {
        console.log(error);
    }
}
exports.default = listarAlunos;
//# sourceMappingURL=listarAlunos.js.map