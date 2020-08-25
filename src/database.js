const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://fazt:fazt@cluster0.a86kz.mongodb.net/app-note?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(() => console.log('Conectado al DB'))
.catch(e => console.log(e));