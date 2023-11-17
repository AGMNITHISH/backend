const errHandler = (err, req, res, next) => {
  const errCode = err.statusCode || 500;
  res.status(errCode);
  res.json({
    message: err,
    stack: err.stack,
  });
};
module.exports = errHandler;
