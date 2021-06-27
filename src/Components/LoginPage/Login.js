import React from 'react'



export default function Login() {
    const API_BASE_URL = 'http://localhost:8080';
    const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect'

    const FACEBOOK_AUTH_URL = API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;
    
    return (
        <div>
            <a href={FACEBOOK_AUTH_URL}>
                <button  >login</button>
            </a>
        </div>
    )
}
