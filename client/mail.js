const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(
  {
    // настройки почтового сервера SMTP, надо гуглить настройки почтовых сервисов
    // ethereal.email для тестирования, потом заменяем на рельный почтовый сервер
    host: 'smtp.mail.ru', // адрес smtp сервера для отправки email
    port: 465, // порт - почтового сервера через который будет отправлятся email
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'socialpharmacy@mail.ru', // логин почтового аккаунта
      pass: 'nXk9Pg4hhZvs4D4hxw1M', // Nodesocial1 пароль почтового аккаунта
    },
  },
  // передаем вторым параметром объект содержащий поля,
  // в котором каждое сообщение используется по умолчанию
  {
    from: 'Социальная аптека "Подорожник" <socialpharmacy@mail.ru>', //  from это адрес почтового адреса с которого будем отправлять клиенту сообщение
  }
);

const mailer = (message) => {
  transporter.sendMail(message, (err, info) => {
    if (err) return console.log(err);
    console.log('Email sent: ', info);
  });
};

module.exports = mailer;
