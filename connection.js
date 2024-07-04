const mongoose = require('mongoose');
async function connect(url) {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}
exports.connect = connect;