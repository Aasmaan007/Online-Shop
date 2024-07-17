function protectRoutes(req, res, next) {
  if (!res.locals.isAuth) {
    return res.redirect('/401');
    // 401 is a status code for telling a user he/she is not authenticated
  }

  if (req.path.startsWith('/admin') && !res.locals.isAdmin) {
    return res.redirect('/403');
  }
  // 403 is a status code for telling a user he/she is not auhorised i.e user may be authenticated
  // but doesen't have access to this specific resource
  next();  
}

module.exports = protectRoutes;