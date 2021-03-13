require('dotenv').config();
const sources = require('./routes/sources');
var cors = require('cors');
const express = require("express");

const PORT = process.env.PORT ||  8081;
const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use("/source",sources);

//endpoint for testing if server is up
app.get("/", (req, res) => {
    res.json({ message: "Hello from DOC LIBRARY server !" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});