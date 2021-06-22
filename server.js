const express = require('express');
const morgan = require('morgan');
require('./db/mongoose');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json()); //allows us to access request body as req.body
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev')); //enable incoming request logging in dev mode

app.listen(PORT, () => {
    console.log(`App is now listening on PORT: ${PORT}`);
});
