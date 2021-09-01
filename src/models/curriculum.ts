import { BasicCurriculum } from "../types/curriculum";
import { db } from "../config/db";
import { OkPacket, RowDataPacket } from "mysql2";

export const create = (curriculum: BasicCurriculum, callback: Function) => {
  const queryString = "INSERT INTO curriculo (nome, data_nascimento, cep, logradouro, bairro, cidade, uf, complemento, email, telefone, experiencia) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"

  db.query(
    queryString,
    [
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
    ],
    (err, result) => {
      if (err) { callback(err) };

      const insertId = (<OkPacket>result).insertId;
      callback(null, insertId);
    }
  );
};