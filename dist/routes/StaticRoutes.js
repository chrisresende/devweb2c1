"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BuildPath_1 = require("../utils/BuildPath");
const roteador = (0, express_1.Router)();
roteador.get('/', async function (req, res) {
    res.sendFile(`${(0, BuildPath_1.default)(__dirname)}/src/views/index.html`);
    console.log((0, BuildPath_1.default)(__dirname));
});
roteador.get('*', async function (req, res) {
    res.sendFile(`${(0, BuildPath_1.default)(__dirname)}/src/views/404.html`);
});
exports.default = roteador;
//# sourceMappingURL=StaticRoutes.js.map