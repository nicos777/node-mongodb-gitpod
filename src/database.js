const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://<user>:<passwords>@mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(() => console.log('Conectado al DB'))
.catch(e => console.log(e));
