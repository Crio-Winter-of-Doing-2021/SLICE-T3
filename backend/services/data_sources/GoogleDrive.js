const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');

const client_secret = process.env.client_secret;
const client_id = process.env.client_id;
const redirect_uris = process.env.redirect_uri;

const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris);
const SCOPES = ['https://www.googleapis.com/auth/drive.metadata.readonly'];

// function to generate auth url
function authorize() {
  return oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
}

// function to generate access token
async function getAccessToken(code) {
  const res = await oAuth2Client.getToken(code);
  console.log(res);
  return res.tokens;
}

//fetches a lit of all files on gdrive
async function listFiles(token) {
  oAuth2Client.setCredentials(token);
  const drive = google.drive({version: 'v3', auth : oAuth2Client});
  const res = await drive.files.list({});
  // console.log(res);
  return res.data.files;
}

module.exports = {
  authorize,
  getAccessToken,
  listFiles
}