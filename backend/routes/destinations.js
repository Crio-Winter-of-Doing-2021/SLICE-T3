const express = require("express");
let router = express.Router();
const s3 = require('./destinations/s3');

router.use(express.json());


//routes for different data storages
router.use("/s3",s3);

router.get("/",(req, res) => {
    res.status(200).json({message : "sources route"});
});




module.exports = router;