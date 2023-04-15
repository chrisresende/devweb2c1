"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AlunosController_1 = require("../controllers/AlunosController");
const AuthMiddleware_1 = require("../middlewares/AuthMiddleware");
const roteador = (0, express_1.Router)();
roteador.get('/alunos', AuthMiddleware_1.default.AuthMiddleware, AuthMiddleware_1.default.ManagerMiddleware, AlunosController_1.default.getAlunos);
roteador.post('/aluno', AlunosController_1.default.inserirAluno);
roteador.delete('/aluno', AlunosController_1.default.excluirAluno);
exports.default = roteador;
//# sourceMappingURL=AlunosRoutes.js.map