const mongoose = require('mongoose');
require('dotenv').config();
async function main() {
     try {
          await mongoose.connect(process.env.CONFIG_MONGODB_URL, {
               serverSelectionTimeoutMS: 5000,
               dbName: 'contacts_db',
          });
          console.log('Database connected!');
     } catch (error) {
          console.log({ error });
     }
}

main();