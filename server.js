const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const fs = require('fs');
const path = require('path');

server.use(middlewares);

// Reset Json
server.post('/reset', (req, res) => {
  const dbFilePath = path.join(__dirname, 'db.json');
  const db = JSON.parse(fs.readFileSync(dbFilePath, 'utf8'));
  db.snacks = db.initialData.snacks;
  db.money = db.initialData.money;
  fs.writeFileSync(dbFilePath, JSON.stringify(db, null, 2));
  res.status(200).send('Database reset to initial state');
});

server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running');
});
