const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    // const conn = await mongoose.connect(
      // "mongodb+srv://AniketBh:CuXamaT1GuBuph6l@ankur-warikoo.kjqmv4u.mongodb.net/dummy"
    // );

    console.log("Mongodb connected");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDB;
