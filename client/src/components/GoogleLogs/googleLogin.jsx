// import React from 'react';
// import { useGoogleLogin } from 'react-google-login';
// import { refreshTokenSetup } from '../../utils/refreshToken';
// import google from '../../icon/google.svg'

// const clientId = '707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com';

// function Login() {

//     const onSuccess = (res) => {
//         console.log('Login Success: currentUser:', res.profileObj);
//         localStorage.setItem(
//             "userToken",
//             JSON.stringify(res.profileObj)
//         );
//         // alert(
//         //     `Logged in successfully welcome ${res.profileObj.name}`
//         // );
//         refreshTokenSetup(res);
//         window.location = "/home";
//     };

//     const onFailure = (res) => {
//         console.log('Login failed: res:', res);
//         // alert(
//         //     `Failed to login.`
//         // );
//     };

//     const { signIn } = useGoogleLogin({
//         onSuccess,
//         onFailure,
//         clientId,
//         isSignedIn: true,
//         accessType: 'offline',
//         // responseType: 'code',
//         // prompt: 'consent',
//     });

    

//     return (
//         <div>
//             <button className="logobutton" onClick={() => signIn()}>
//                 <img src={google} alt="google login" className="icon" ></img>
//                 {/* <h4>Login with Google</h4> */}
//             </button> <br/>
//             <button className="loginText" onClick={() => signIn()} >
//                 Login with Google
//             </button>
//         </div>
//     );
// }

// export default Login;