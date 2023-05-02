const mongoose = require("mongoose");

// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/constructDaily"
// );

// module.exports = mongoose.connection;

mongoose.createConnection(
  process.env.MONGODB_URI || 'mongodb+srv://robertschauss91:<GxBQjNChYq2RCYUQ>@uw-bootcamp.uyxhzht.mongodb.net/UW-Bootcamp?retryWrites=true&w=majorityp');

  module.exports = mongoose.connection;