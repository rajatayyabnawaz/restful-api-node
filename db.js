const mongoose = require('mongoose');
const url = "mongodb://127.0.0.1:27017/restfullapi";

const Condb = async () => {
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("✅ MongoDB connected");
};

module.exports = { Condb };
