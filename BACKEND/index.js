const app = require('./src/app');
require('dotenv').config();

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
  console.log(`🚀 Servidor en puerto ${PORT}`);
});