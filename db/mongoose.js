const mongoose = require('mongoose');

mongoose
    .connect(
        process.env.MONGODB_URI ||
            'mongodb://localhost:27017/fitness-tracker-project',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        }
    )
    .then(() => {
        console.log('Successfully connected to MongoDB');
    })
    .catch((err) => {
        console.log('Error connecting to MongoDB', err);
    });
