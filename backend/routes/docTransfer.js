const express = require("express");
let router = express.Router();
var multer  = require('multer');
var upload = multer();

const { docTransfer } = require('../services/DocTransferUtility');


router.use(express.json());

//route for transfer of file
router.post("/", upload.any(), (req,res) => {

    // file transfer from form data file
    if(req.files.length>0){
        const { sourceConfig , destinationConfig }= JSON.parse(req.body.reqJson);
        const files = req.files;

        docTransfer(sourceConfig,destinationConfig,files)
        .then(result =>  res.status(200).json({result}))
        .catch(err => res.status(500).json({err}));
    // file transfer from other external sources
    }else{
        const { sourceConfig , destinationConfig }= req.body;

        docTransfer(sourceConfig,destinationConfig)
        .then(result =>  res.status(200).json({result}))
        .catch(err => res.status(500).json({err}));
    }
    
});

router.get("/",(req, res) => {
    res.status(200).json({message : "doctransfer route"});
});




module.exports = router;