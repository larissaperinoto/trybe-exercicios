const CourseSchema = (sequelize, Datatypes) => {
  const CourseTable = sequelize.define('Course', {
    name: Datatypes.STRING,
    description: Datatypes.STRING,
    creation_date: Datatypes.DATE,
    active: Datatypes.BOOLEAN,
    duration: Datatypes.INTEGER
  }, {
    tableName: 'courses',
    underscored: true,
    // timestamps: false -> para não gerar o created_at e updated_at nas migrations
  })

  return CourseTable;
}

module.exports = CourseSchema;