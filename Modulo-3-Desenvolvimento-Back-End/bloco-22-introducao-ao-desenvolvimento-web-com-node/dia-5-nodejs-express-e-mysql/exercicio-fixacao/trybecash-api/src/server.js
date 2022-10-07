const app = require('./app');
const connection = require('./model/db/connection');

const port = 3080;

app.listen(port, async () => {
  console.log(`Running at port ${port}`);
});
