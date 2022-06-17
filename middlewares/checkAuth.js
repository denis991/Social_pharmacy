const checkAuth = (req, res, next) => {
  if (req.session.userId) {
    return res.redirect('/');
  }
  return next();
};

const checkSession = (req, res, next) => {
  if (req.session.userId) {
    res.locals.userId = req.session.userId;
    return next();
  }
  next();
};

const checkName = (req, res, next) => {
  if (req.session.name) {
    res.locals.name = req.session.name;
    return next();
  }
  next();
};

module.exports = { checkAuth, checkSession, checkName };
