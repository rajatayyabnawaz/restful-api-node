const express = require('express');
const cors = require('cors');
const { Condb } = require('./db');
const router = require('./Routers'); // Make sure path is correct
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/product', router); // ✅ Correct usage

Condb()
  .then(() => {
    app.listen(9000, () => {
      console.log("Server Running At Port No 9000");
    });
  })
  .catch((err) => {
    console.log("Database connection error:", err);
  });
