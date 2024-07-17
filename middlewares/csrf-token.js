function addCsrfToken(req, res, next) {
  res.locals.csrfToken = req.csrfToken();
  next();
}
// locals allows me to set variables which are exposed to all views 

module.exports = addCsrfToken;