var axios = require('axios');
var data = JSON.stringify({"email":"thuggy2@gmail.com"});

var config = {
  method: 'get',
  url: 'http://localhost:5000/api/docs',
  headers: { 
    'auth-token': 'token-here', 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
