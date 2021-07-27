const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

const uri =
  "mongodb+srv://crm:pKWsFFK0ndaXeOZb@cluster0.mqrsq.mongodb.net/crmDB?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const collection = client.db("crmDB").collection("crmDB");
  // perform actions on the collection object
  console.log(uri);
});

app.post("/addAppointment", (req, res) => {
  const entries = req.body;
  console.log(entries);
  appointmentsCollection.insertOne(entries).then((result) => {
    res.send(result.insertedCount > 0);
  });
});

const app = express();

app.use(bodyParser.json());
app.use(cors());

const port = 5001;

app.get("/", (req, res) => {
  res.send("success");
});

app.listen(process.env.PORT || port);
