const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    /* configuração do esquema. */
});

module.exports = mongoose.model('User', userSchema);