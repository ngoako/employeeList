const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/EmployeeDB', {useNewUrlParser: true}, (err) => {
    if (!err) {console.log('Connected to the database successfully')}
    else {
        console.log('Error connecting to the database: ' + err)
    }
});

require('./employee');