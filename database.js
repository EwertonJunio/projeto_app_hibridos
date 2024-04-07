const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        await mongoose.connect('mongodb+srv://ewertonjunior776:MZIwerPVNnMYreEW@app.cd42pcx.mongodb.net/meu-banco-de-dados?retryWrites=true&w=majority');
        console.log('Mongo Db conectado com sucesso');
    } catch (error) {
        console.error('Conexão com o MongoDB falhou: ', error.message);
        process.exit(1);
    }
};

// Chamada para conectar-se ao banco de dados
connectDB();

// Exportar a função connectDB
module.exports = connectDB;