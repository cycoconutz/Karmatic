const mongoose = require('mongoose');
// || "mongodb://localhost:27017/karmatic",
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
