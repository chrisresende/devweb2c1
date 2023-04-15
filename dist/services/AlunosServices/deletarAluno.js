"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const execQuery_1 = require("../execQuery");
async function deletarAluno(aluno) {
    try {
        const resultado = await execQuery_1.default.execQuery(`DELETE FROM alunos WHERE alunos.nome = '${aluno.nome}'`);
        console.log(resultado);
    }
    catch (erro) {
        console.log(erro);
    }
}
exports.default = deletarAluno;
//# sourceMappingURL=deletarAluno.js.map