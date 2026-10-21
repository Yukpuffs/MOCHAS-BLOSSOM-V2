const app = require('./src/app');
require('dotenv').config();

const PORT = process.env.PORT || 5500;

app.listen(PORT,'0.0.0.0', () => {
  console.log(`🚀 Servidor en puerto ${PORT}`);
});

/*10.78.203.35*/