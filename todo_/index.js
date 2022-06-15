const express = require('express');
const morgan = require('morgan');
const path = require('path');
const hbs = require('hbs');
const { List } = require('./db/models');
const deleteRouter = require('./router/delete.router');
const editRouter = require('./router/edit.router');
const editStatusRouter = require('./router/editStatus.router');
const createRouter = require('./router/create.router')

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));

hbs.registerPartials(`${__dirname}/views/partials`);

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', async (req, res) => {
  const data = await List.findAll();
	res.render('mainPage', { data })
  });

app.get('/error', (req, res) => {
  res.render('error', {});
});
app.use('/status', editStatusRouter);
app.use('/form', createRouter);
app.use('/delete', deleteRouter);
app.use('/edit', editRouter);
	
app.listen(3001, () => { console.log('Hello express'); });
