/**
 * all s3 storage based routes will go here
 */

 const express = require("express");
 let router = express.Router();
 const {listBuckets} = require('../../services/data_destinations/AwsS3');
 
 router.use(express.json());
 
 
 router.get("/",(req, res) => {
     res.status(200).json({message : "s3 route"});
 });
 
//  //endpoint to authenticate user to aws
//  router.get("/auth",(req, res) => {
//      const authUrl = authorize();
//      res.status(200).json({
//          authUrl,
//          message : "Auth url generated successfully."
//      });
//  });
 
 
 //endpoint to fetch list of all BUCKETS
 router.post("/listBuckets",(req, res) => {
    listBuckets(req.body)
     .then(data =>{
         console.log(data);
         res.status(200).json({data});
     })
     .catch(error => {
         res.status(500).json({message : "Could Not fetch buckets",error : error});
     });
 });
 
 
 module.exports = router;