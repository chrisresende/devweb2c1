"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const execQuery_1 = require("../execQuery");
async function inserirAluno(aluno) {
    try {
        const resultado = await execQuery_1.default.execQuery(`INSERT into alunos VALUES ('${aluno.nome}')`);
        console.log(resultado);
    }
    catch (erro) {
        console.log(erro);
    }
}
exports.default = inserirAluno;
//# sourceMappingURL=inserirAluno.js.map