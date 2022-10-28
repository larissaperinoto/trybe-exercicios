const courseService = require('../service/course.service');

const createCourse = async (req, res) => {
  const newCourse = await courseService.createCourse(req.body);

  res.status(201).json(newCourse);
};

module.exports = {
  createCourse,
}