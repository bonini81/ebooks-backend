const mongoose = require('mongoose');

 /*para versiones anteriores de Windows tipo 7, usar version Nodejs 2.3 or later no la 3*/
 mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected madafaka'))
  .catch((error) => console.log('Error connecting to database....', error));
  
/* Ese error es para Debugging */
/* Mejor ver como usar con dotenv*/
