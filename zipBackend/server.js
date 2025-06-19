const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

server.use(router);
server.listen(process.env.PORT || 3000, () => {
  console.log('✅ JSON Server running on port', process.env.PORT || 3000);
});