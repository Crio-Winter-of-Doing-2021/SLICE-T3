require('dotenv').config();
const sources = require('./routes/sources');
const destinations = require('./routes/destinations');
const docTransfer = require('./routes/docTransfer');
var cors = require('cors');
const express = require("express");
const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./documentation/DocLibrarySwagger.json');

const PORT = process.env.PORT ||  8081;
const app = express();

//middlewares
app.use(cors());
app.use(express.json());



//routes
app.use("/source",sources);
app.use("/destination",destinations);
app.use("/docTransfer",docTransfer);

//endpoint for testing if server is up
app.get("/", (req, res) => {
    res.json({ message: "Hello from DOC LIBRARY server !" });
});

//endpoint for swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});