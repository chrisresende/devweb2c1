"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config({
    path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env',
});
const express = require("express");
const AlunosRoutes_1 = require("./routes/AlunosRoutes");
const StaticRoutes_1 = require("./routes/StaticRoutes");
const port = process.env.PORT;
const app = express();
app.use(express.json());
app.use('/public', express.static(`${__dirname}/public`));
app.use(AlunosRoutes_1.default);
app.use(StaticRoutes_1.default);
app.listen(port, function () {
    console.log(`Servidor funcionando na porta ${port}`);
});
//# sourceMappingURL=server.js.map