const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Student, User } = require('../db/models');
const { checkAuth } = require('../middlewares/checkAuth');

router.route('/')
  .get(async (req, res) => {
    const students = await Student.findAll();
    res.render('index', { students });
  });

router.route('/register')
  .get(checkAuth, async (req, res) => {
    res.render('register');
  })
  .post(checkAuth, async (req, res) => {
    try {
      const { email, name, password } = req.body;

      if (email && name && password) {
        const hashPass = await bcrypt.hash(password, Number(process.env.SALTROUNDS));
        await User.create({ email, name, password: hashPass });
        res.redirect('/');
      }
    } catch (err) {
      // console.log(err);
      res.redirect('/register');
    }
  });

router.route('/login')
  .get(async (req, res) => {
    res.render('login');
  })
  .post(async (req, res) => {
    try {
      const { email, password } = req.body;

      if (email && password) {
        const user = await User.findOne({ where: { email } });
        const passCheck = await bcrypt.compare(password, user.password);
        if (user && passCheck) {
          req.session.userId = user.id;
          res.redirect('/');
        } else { res.redirect('/login'); }
      }
    } catch (err) {
      // console.log(err);
      res.redirect('/login');
    }
  });

router.route('/logout')
  .get((req, res) => {
    req.session.destroy((error) => {
      if (error) {
        // console.error(error);
        return res.sendStatus(500);
      }
      res.clearCookie('auth').redirect('/');
    });
  });

module.exports = router;
