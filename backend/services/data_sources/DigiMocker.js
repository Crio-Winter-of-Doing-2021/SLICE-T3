var axios = require('axios');
var request = require('request').defaults({ encoding: null });

function authorize() {
  return process.env.digimocker_login_url
}

// function to generate access token
async function getAccessToken(data) {
  // var data = JSON.stringify({"email":"sampleemail@gmail.com","password":"password"});

  console.log(data);
  var config = {
    method: 'post',
    url: 'https://digimocker.herokuapp.com/api/user/login',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : JSON.stringify(data)
  };

  console.log(config);

  return new Promise((resolve,reject) => {
    axios(config)
    .then(function (response) {
      console.log(response.data);
      return resolve({ access_token : response.data});
    })
    .catch(function (error) {
      console.log(error);
      return reject(error);
    });
  });

}

async function listFiles(data) {

  console.log(data);
  var config = {
    method: 'post',
    url: 'https://digimocker.herokuapp.com/api/docs',
    headers: { 
      'Content-Type': 'application/json',
      'auth-token': data['token']['access_token']
    },
    data : JSON.stringify({"email":data['email']})
  };

  console.log(config);

  return new Promise((resolve,reject) => {
    axios(config)
    .then(function (response) {
      console.log(response.data);
      return resolve(response.data);
    })
    .catch(function (error) {
      console.log(error);
      return reject(error);
    });
  });
}


async function downloadFile(ConfigObject) {
  const {url} = ConfigObject;

  return new Promise((resolve,reject) => { 
    request.get(url, function (err, res, body) {
      if(err){
        console.log(err);
        return reject(err);
      }
      return resolve(body.toString('base64'));
});
  });
}



module.exports = {
  authorize,
  getAccessToken,
  listFiles,
  downloadFile
}