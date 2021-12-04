import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import google from '../../icon/google.svg'

import './style.css';

const clientId =
    '707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com';

function Logout() {
    const onLogoutSuccess = (res) => {
        console.log('Sign out Success');
        // alert('Logged out Successfully ✌');
        localStorage.clear();
        window.location = "/";
    };

    const onFailure = () => {
        console.log('Sign out failure');
    };

    const { signOut } = useGoogleLogout({
        clientId,
        onLogoutSuccess,
        onFailure,
    });

    return (
        <button onClick={signOut} className="button">
            {/* <img src={google} alt="google login" className="icon"></img> */}
            Sign out
            {/* <span className="buttonText">Sign out</span> */}
        </button>
    );
}

export default Logout;