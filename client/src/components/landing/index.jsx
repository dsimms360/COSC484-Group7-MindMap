import React, { useState } from "react";
import { Button } from "./ButtonElements";
// import { withRouter } from "react-router-dom";

import Video from "../../videos/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";


// import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../../utils/refreshToken';
// import google from '../../icon/google.svg'
const clientId = '707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com';


function HeroSection(props) {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  // const handleClickTopics = () => {
  //   props.history.push("/topics");
  // };


// login functions
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    localStorage.setItem(
        "userToken",
        JSON.stringify(res.profileObj)
    );
    // alert(
    //     `Logged in successfully welcome ${res.profileObj.name}`
    // );
    refreshTokenSetup(res);
    window.location = "/home";
};

const onFailure = (res) => {
    console.log('Login failed: res:', res);
    // alert(
    //     `Failed to login.`
    // );
};

const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
});


  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Mind Map</HeroH1>
        <HeroP>
          We are here to simply things for you!
        </HeroP>
        <HeroBtnWrapper>
          <Button
            onClick={() => signIn()}            
            // onClick={handleClickTopics}
            to="/topics"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            primary="true"
            dark="true"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Google Sign In {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
