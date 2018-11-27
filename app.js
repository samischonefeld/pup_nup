const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();

app.use(logger('dev'));
app.use(express.static('public'));
// app.use(express.static('client/build'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const pupRoutes = require('./routes/pup-routes.js')

const port = process.env.port || 3001;

app.use('/pup', pupRoutes);

app.get('/', (req, res) => {
  res.send(`Welcome to Sami's final project, PupNup!`)
})

app.use('*', (req, res) => {
  res.status(400).json({
    message: 'Endpoint not found!',
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
