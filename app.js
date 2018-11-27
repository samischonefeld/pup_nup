const express = require('express');
// const router = express.Router();
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// const session = require('express-session');


const app = express();

app.use(logger('dev'));
app.use(express.static('public'));
// app.use(express.static('client/build'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// const pupRoutes = require('./routes/pup-routes.js')

const port = process.env.port || 3001;


app.get('/', (req, res) => {
  res.send(`Welcome to Sami's final project, PupNup!`)
})

const pupRoutes = require('./routes/pup-routes.js')
app.use('/pup', pupRoutes);

const medicationRoutes = require('./routes/medication-routes.js')
app.use('/medication', medicationRoutes);

const ownerRoutes = require('./routes/owner-routes.js')
app.use('/owner', ownerRoutes)

const taskRoutes = require('./routes/task-routes.js')
app.use('/task', taskRoutes)

const vetRoutes = require('./routes/vet-routes.js')
app.use('/vet', vetRoutes)

app.use('*', (req, res) => {
  res.status(400).json({
    message: 'Endpoint not found!',
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
