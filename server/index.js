const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
//const PORT= process.env.DB_PORT || 3001;
const PORT= process.env.DB_PORT

const loadDb = require('./src/loadDB/loadDB.js')

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
server.listen(PORT, async () => {
  await loadDb();
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
