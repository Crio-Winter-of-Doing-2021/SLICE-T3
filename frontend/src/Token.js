import React from 'react';
import { useCookies } from 'react-cookie'


export default function Token() {
    
    const [cookies, setCookie] = useCookies('token')
    function getParam(param){
        return new URLSearchParams(window.location.search).get(param);
    }
    var code = getParam('code')

    let expires = new Date()
    expires.setTime(expires.getTime() + 10000)
    setCookie('token', code, { path: '/',  expires})

    console.log(cookies['token'])
    return (
        <div>
            <h1>{code}</h1>
            <h3>coookie: {cookies['token']}</h3>
        </div>
    );

}

// export default function Token() {
//     return (
//         <p>Hey there</p>
//     )
// }