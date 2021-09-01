"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
const config_1 = require("./config");
exports.db = mysql2_1.default.createConnection({
    host: config_1.DB_HOST,
    user: config_1.DB_USER,
    password: config_1.DB_PWD,
    database: config_1.DB_NAME
});
