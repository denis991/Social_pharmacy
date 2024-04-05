# Social_pharmacy

Добрый день! приветствуем вас в нашей социальной аптеке!
Если решили использовать её не забудьте вам нужно иметь
postgres и mysql(dbever) для работы с базой данных. 0. заполнить env

1. npm i
1. 2. на всякий крайний случай проверим на сиды
      npx sequelize-cli db:migrate:undo:all для отката всех изменений
1. npx sequelize-cli db:migrate
1. npx sequelize-cli db:seed:all
1. npm run dev или npm test (в терминале)
1. перейти по адресу http://localhost:3000/ или http://127.0.0.1:3000/
1. после первого входа на админку admin@mail.ru и пароль admin у вас добавляется доп функции в админке

https://social-pharmacy.herokuapp.com
