const { Course } = require('../models');

const createCourse = async (newCourse) => {
  const { name, description, duration, active, creation_date } = newCourse;
  Course.create({ name, description, duration, active, creation_date }); // Método padrão sequelize

};

module.exports = { createCourse };