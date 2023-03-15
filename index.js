require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const living_network = require("./models/living_network");

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

app.get("/", (req, res) => {
  res.send({ title: "Living_Network" });
});

app.get("/add", async (req, res) => {
  try {
    await living_network.insertMany([
      {
        title: "performance",
        body: "testPerformance",
      },
      {
        title: "Mode5G",
        body: "testMode5G",
      },
    ]);
    res.send({ title: "Living_Network" });
  } catch (error) {
    console.log("err : " + error);
  }
});

app.get("/get", async (req, res) => {
  const ln = await living_network.find();
  if (ln) {
    res.json(ln);
  } else {
    res.send("Something wrong");
  }
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
  });
});
