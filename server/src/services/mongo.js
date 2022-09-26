const mongoose = require("mongoose");

const MONGO_URL =
  "mongodb+srv://nasa-api:6qmaVW20jlag7ICA@nasacluster.r7h0yup.mongodb.net/?retryWrites=true&w=majority";

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  });

}

async function mongoDisconnect() {
    await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect
};
