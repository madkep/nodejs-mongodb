const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://redes:mauri@db1-qodpz.gcp.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
     })
     .then(db => console.log('db is connected'))
     .catch(err => console.log.error(err));