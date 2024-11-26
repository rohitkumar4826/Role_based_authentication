const mongoose = require("mongoose");

const dbConnect = async () => {
  const connect = await mongoose.connect(process.env.CONNECTION_STRING);
  try {
    console.log(
      `Database connected : ${connect.connection.host}, ${connect.connection.name}`
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = dbConnect;
