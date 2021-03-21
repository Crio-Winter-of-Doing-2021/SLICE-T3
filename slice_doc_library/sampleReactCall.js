import React from "react";

//import statement to be used for local deployment
var SliceDocLibraryT3 = require('../../node_modules/slice_doc_library_t3/dist/index');


function Test() {
  React.useEffect(() => {

    var apiInstance = new SliceDocLibraryT3.SourcesApi();

    var body = { //replace this with values obtained from auth api
    "access_token": "",
    "refresh_token": "", 
    "scope": "",
    "token_type": "",
    "expiry_date": 1234
    }

    var callback = function(error, data, response) {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ' + JSON.stringify(data));
    }
    };
    apiInstance.gDriveSourceListFiles(body, callback);

  }, []);

  return (
    <div>
      <h1>test page</h1>
      
    </div>
  );
}

export default Test;