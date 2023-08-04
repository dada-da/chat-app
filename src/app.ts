import express from 'express';

const app = express();
const PORT = 3000 || process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(PORT, () => {
  return console.log(`Express is listening at http://localhost:${PORT}`);
});
