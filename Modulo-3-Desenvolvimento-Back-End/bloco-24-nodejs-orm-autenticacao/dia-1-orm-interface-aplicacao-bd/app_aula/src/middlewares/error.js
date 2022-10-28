const error = (err, _req, res, _next) => {
  const status = err.status || 500;
  const message = err.message || 'Erro inesperado';

  return res.status(status).json({ message });
};

module.exports = error;
