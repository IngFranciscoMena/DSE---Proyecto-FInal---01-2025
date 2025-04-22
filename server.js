require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/config/db.config');

const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, () => {
    console.log(`La aplicación esta escuchando en http://localhost:${PORT}`);
});