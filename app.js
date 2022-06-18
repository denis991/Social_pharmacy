require('dotenv').config(); // Load .env file
const express = require('express'); // подключаем модуль express
const path = require('path'); // подключаем модуль path
const morgan = require('morgan'); // подключаем модуль morgan
const hbs = require('hbs'); // подключаем модуль hbs
const cookieParser = require('cookie-parser'); // подключаем модуль cookie-parser
const session = require('express-session'); // подключаем модуль express-session
const FileStore = require('session-file-store')(session); // подключаем модуль session-file-store
const cors = require('cors');
const indexRouter = require('./routes/indexRouter');
const productRouter = require('./routes/productRouter');

const registrRouter = require('./routes/registrRouter'); // подключаем роутер для регистрации

const { checkSession, checkName } = require('./middlewares/checkAuth');

// const bcrypt = require('bcrypt'); // шде будет подключаться модуль bcrypt паролей
const app = express(); // создаем приложение
const PORT = process.env.PORT ?? 3000;
// получаем порт из переменной окружения или присваиваем значение 3000

const sessionConfig = {
  name: 'auth', // имя cookie-файла
  secret: 'catdog', // ключ для шифрования
  store: new FileStore(), // хранилище сессий
  cookie: {
    // настройки куки
    secure: false, // безопасность куки
    httpOnly: true, // доступно только по протоколу http недоступно для прользователя
    maxAge: 1000 * 60 * 60 * 24, // COOKIE'S LIFETIME — 1 DAY
  },
  resave: false, // пересохранение сессии
  saveUninitialized: false,
  // сохранение неинициализированных сессий или только когда пользователь зарегистрирован
};

app.use(cors());
app.use(session(sessionConfig)); // инициализация сессии
app.use(cookieParser()); // инициализация куки

hbs.registerPartials(`${__dirname}/views/partials`); // подключаем партиллеры
hbs.registerHelper('Admin', (role) => (role == 1)); // разграничение Admina

app.set('views', path.join(__dirname, 'views')); // подключаем папку views
app.set('view engine', 'hbs'); // подключаем пайтон для отображения в браузере

app.use(morgan('dev'));
app.use(express.static(path.join(process.env.PWD, 'public'))); // подключаем папку public
app.use(express.urlencoded({ extended: true })); // подключаем модуль для обработки данных из форм
app.use(express.json()); // подключаем модуль для обработки данных из json

app.use(checkName);
app.use(checkSession);

app.use('/', indexRouter);
app.use('/product', productRouter);

app.use('/', registrRouter);

app.get('/calendar', (req, res) => {
  res.render('calendar99');
});

app.use('/error', (req, res) => {
  res.status(404).send('404 Not Found');
});

app.listen(PORT, () =>
  console.log(`Server is awesome on http://localhost:${PORT}`, PORT));
