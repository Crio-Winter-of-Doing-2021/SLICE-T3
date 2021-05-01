const {google} = require('googleapis');

const SCOPES = ['https://www.googleapis.com/auth/drive.readonly'];

// function to generate auth url
function authorize(oAuth2ClientJSON) {
  const {client_id, client_secret, redirect_uris} = oAuth2ClientJSON;
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris);

  const url = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });

  return url;
}

// function to generate access token
async function getAccessToken(code,oAuth2ClientJSON) {
  const {client_id, client_secret, redirect_uris} = oAuth2ClientJSON;
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris);
  const res = await oAuth2Client.getToken(code);
  console.log(res);
  return res.tokens;
}

//fetches a list of all files on gdrive
async function listFiles(token,oAuth2ClientJSON) {
  const {client_id, client_secret, redirect_uris} = oAuth2ClientJSON;
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris);
  oAuth2Client.setCredentials(token);
  const drive = google.drive({version: 'v3', auth : oAuth2Client});
  const res = await drive.files.list({
    fields: "files(id, name, kind, mimeType, iconLink)"
  });
  // console.log(res);
  return res.data.files;
}


async function downloadFile(ConfigObject) {

  const {client_id, client_secret, redirect_uris} = ConfigObject;
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris);

  oAuth2Client.setCredentials(ConfigObject.token);
  const drive = google.drive({version: 'v3', auth : oAuth2Client});

  return new Promise((resolve,reject) => {
      drive.files.get({fileId: ConfigObject.fileId, alt: "media",},{responseType: "stream"}, (err, res) => {
        if (err) {
          console.log(err);
          return reject(err);
        }

        console.log(res);
        let buf = [];
        res.data.on("data", (e) => buf.push(e));
        res.data.on("end", () => {
          const buffer = Buffer.concat(buf);
          return resolve(buffer.toString('base64'));
        });
      }
    );

  });
}



module.exports = {
  authorize,
  getAccessToken,
  listFiles,
  downloadFile
}