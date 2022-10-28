const express = require('express');
const courseController = require('../controller/course.controller');

const routers = express.Router();

routers.post('/', courseController.createCourse);

module.exports = routers;