"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const curriculumRouter_1 = require("./curriculumRouter");
const routes = (0, express_1.Router)();
routes.get('/', (request, response) => {
    return response.json({
        'message': 'Server OK!'
    });
});
routes.use('/curriculum', curriculumRouter_1.curriculumRouter);
exports.default = routes;
