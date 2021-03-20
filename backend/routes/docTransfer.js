const express = require("express");
let router = express.Router();
const { docTransfer } = require('../services/DocTransferUtility');

router.use(express.json());

//route for transfer of file
router.post("/",(req,res) => {
    const { sourceConfig , destinationConfig }= req.body;
    console.log(req.body);

    docTransfer(sourceConfig,destinationConfig)
    .then(result =>  res.status(200).json({result}))
    .catch(err => res.status(500).json({err}));
    
});

router.get("/",(req, res) => {
    res.status(200).json({message : "doctransfer route"});
});




module.exports = router;