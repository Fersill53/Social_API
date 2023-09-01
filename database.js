const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://fersill53:13LVDyOqbu7aoNUa@cluster2.2spdlnv.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB!');
});