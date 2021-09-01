"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const db_1 = require("../config/db");
const create = (curriculum, callback) => {
    const queryString = "INSERT INTO curriculo (nome, data_nascimento, cep, logradouro, bairro, cidade, uf, complemento, email, telefone, experiencia) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    db_1.db.query(queryString, [
        curriculum.nome,
        curriculum.data_nascimento,
        curriculum.cep,
        curriculum.logradouro,
        curriculum.bairro,
        curriculum.cidade,
        curriculum.uf,
        curriculum.complemento,
        curriculum.email,
        curriculum.telefone,
        curriculum.experiencia
    ], (err, result) => {
        if (err) {
            callback(err);
        }
        ;
        const insertId = result.insertId;
        callback(null, insertId);
    });
};
exports.create = create;
