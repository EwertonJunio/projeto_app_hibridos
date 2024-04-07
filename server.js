const express = require("express");
const connectDB = require('./database');
const userRoutes = require("./routes/userRoutes"); // Importando as rotas do usuário

const app = express();
const PORT = 3000;

connectDB();
app.use(express.json());

// Configurando as rotas do usuário
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});