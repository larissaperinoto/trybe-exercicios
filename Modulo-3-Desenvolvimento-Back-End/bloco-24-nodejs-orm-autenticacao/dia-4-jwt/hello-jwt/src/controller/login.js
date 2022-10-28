const { validateBody } = ('../middlewares');

const login = (req, res, next) => {
  const { error }  = validateBody(req.body);

  if(error) return next(error);
};

module.exports = { login };
