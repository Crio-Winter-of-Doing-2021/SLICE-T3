/**
 * all gdrive source based routes will go here
 */
const express = require("express");
let router = express.Router();
const {authorize,getAccessToken,listFiles} = require('../../services/data_sources/GoogleDrive');

router.use(express.json());


router.get("/",(req, res) => {
    res.status(200).json({message : "gdrive route"});
});

//endpoint to return auth url
router.get("/auth",(req, res) => {
    const authUrl = authorize();
    res.status(200).json({
        authUrl,
        message : "Auth url generated successfully."
    });
});

//endpoint which will return token by extracting auth code
router.get("/oauth2callback",(req, res) => {
    const authCode = req.query.code;
    getAccessToken(authCode)
    .then(accessToken => {
        res.status(200).json(accessToken);
    })
    .catch(error => {
        res.status(500).json({message : "Could Not Generate token",error : error});
    });
});

//endpoint to fetch list of all files
router.post("/listFiles",(req, res) => {
    listFiles(req.body)
    .then(files =>{
        console.log(files);
        res.status(200).json({files});
    })
    .catch(error => {
        res.status(500).json({message : "Could Not fetch files",error : error});
    });
});

module.exports = router;