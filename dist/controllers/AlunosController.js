"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deletarAluno_1 = require("../services/AlunosServices/deletarAluno");
const inserirAluno_1 = require("../services/AlunosServices/inserirAluno");
const listarAlunos_1 = require("../services/AlunosServices/listarAlunos");
class AlunosController {
    async getAlunos(req, res) {
        const alunos = await (0, listarAlunos_1.default)();
        console.log(alunos);
        res.end(JSON.stringify(alunos));
    }
    async inserirAluno(req, res) {
        const aluno = req.body;
        console.log(aluno.nome);
        await (0, inserirAluno_1.default)(aluno);
        res.end(JSON.stringify(aluno));
    }
    async excluirAluno(req, res) {
        const aluno = req.body;
        const alunoExcluido = await (0, deletarAluno_1.default)(aluno);
        res.end(alunoExcluido);
    }
}
exports.default = new AlunosController();
//# sourceMappingURL=AlunosController.js.map