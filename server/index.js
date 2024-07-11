const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', userRoutes);

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
