const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');
const { checkAuth } = require('../middlewares/checkAuth');
const mailer = require('../client/mail');

router.route('/').get(async (req, res) => {
  // const students = await Student.findAll();
  res.render('index', { userId: req.session.userId });
});

router // registr route
  .route('/register')
  .get(checkAuth, async (req, res) => {
    res.render('register');
  })
  .post(checkAuth, async (req, res) => {
    try {
      const { email, name, password } = req.body;
      if (email && name && password) {
        const message = {
          to: req.body.email, // это адрес, который клиент указал в инпуте email
          subject: 'Вы зарегистрировались!', // тема письма
          html: `
          <h2>Поздравляем, Вы успешно зарегистрировались на нашем сайте!</h2>
          
          <i>Данные Вашей учетной записи:</i>
          <ul>
            <li>Имя: ${req.body.name}</li>
            <li>Почта: ${req.body.email}</li>
            <li>Пароль: ${req.body.password}</li>

          <p>Данное письмо не требует ответа.</p>
          `
        };
        mailer(message)
        const hashPass = await bcrypt.hash(
          password,
          Number(process.env.SALTROUNDS)
        );
        await User.create({ email, name, password: hashPass });
        res.send(`<p> Регистрация прошла успешно! Данные учетной записи отправлены на email: <b>${req.body.email}</b></p><button><a href="/">Main page</a></button>`);
        // res.redirect('/');
      }
    } catch (err) {
      console.log(err);
      res.redirect('/register');
    }
  });

router// вход проверка
  .route('/login')
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
        } else {
          res.redirect('/login');
        }
      }
    } catch (err) {
      console.log(err);
      res.redirect('/login');
    }
  });

router.route('/logout').get((req, res) => {
  req.session.destroy((error) => {
    if (error) {
      console.error(error);
      return res.sendStatus(500);
    }
    res.clearCookie('auth').redirect('/');
  });
});

module.exports = router;
