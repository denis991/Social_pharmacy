const router = require('express').Router();
const { User } = require('../db/models');
// Student
const checkAuth = require('../middlewares/checkAuth');

router.route('/').get(async (req, res) => {
  res.render('index', { userId: req.session.userId });
});

router
  .route('/register') // регистрация
  .get(checkAuth, async (req, res) => {
    res.render('register');
  })
  .post(checkAuth, async (req, res) => {
    try {
      const { email, name, password } = req.body;

      if (email && name && password) {
        await User.create({ email, name, password });
        res.redirect('/');
      }
    } catch (err) {
      console.log(err);
      res.redirect('/register');
    }
  });

router // вход проверка
  .route('/login')
  .get(async (req, res) => {
    res.render('login');
  })
  .post(async (req, res) => {
    try {
      const { email, password } = req.body;

      if (email && password) {
        const user = await User.findOne({ where: { email, password } });
        if (user) {
          req.session.userId = user.id;
          res.redirect('/');
        } else {
          res.redirect('/login');
        }
      }
    } catch (err) {
      console.log(err);
      res.redirect('/login');
    }
  });

router.route('/logout').get((req, res) => { // выход session
  req.session.destroy((error) => {
    if (error) {
      console.error(error);
      return res.sendStatus(500);
    }
    res.clearCookie('auth').redirect('/');
  });
});

module.exports = router;
