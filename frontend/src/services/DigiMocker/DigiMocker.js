import React, { useState, useEffect} from 'react'
import ListSelectedFiles from '../ListFiles'

import axios from 'axios'
const baseUrl = 'http://localhost:5000/api'

const DigiMocker = () => {
    // const [files, setFiles] = useState([])

    // var request = require('request');
    // var options = {
    //   'method': 'GET',
    //   'url': 'http://localhost:5000/api/docs',
    //   'headers': {
    //     'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZWUxYTg2MGFiNTVlZTJjYjFiNGMiLCJpYXQiOjE2MTU5ODIxNzl9.q-tugWik7dHo_M8LjnM6-cAI3DuoeShkMiEDBlvsxLo',
    //     'Content-Type': 'application/json'
    //   },
    // //   body: JSON.stringify({"email":"thuggy@gmail.com"})
    
    // };
    // request(options, function (error, response) {
    //   if (error) throw new Error(error);
    //   console.log(response.body);
    // });
    
    return (
        <div>
            <ul>
                <ListSelectedFiles />
            </ul>
        </div>
    )
}

export default DigiMocker

