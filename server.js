const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const indexRouter = require('./server/routes/router');
const connectDB = require('./server/db/connection');

const app = express();

connectDB();

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, './public')));

app.use('/', indexRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
})