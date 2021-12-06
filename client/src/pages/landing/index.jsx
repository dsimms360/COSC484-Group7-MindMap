import React, { useState } from "react";
import { Button } from "./ButtonElements";
import { useGoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../../utils/refreshToken';
import Video from "../../videos/video.mp4";
import googleLogo from '../../icon/google.svg'
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

const clientId = '707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com';

  function HeroSection() {
    const [hover, setHover] = useState(false);

    const onHover = () => {
      setHover(!hover);
    };

    const onSuccess = (res) => {
      console.log('Login Success: currentUser:', res.profileObj);

      localStorage.setItem(
          "userToken",
          JSON.stringify(res.profileObj)
      );
      refreshTokenSetup(res);
      window.location = "/home";
  };

  const onFailure = (res) => {
      console.log('Login failed: error:', res);
  };

  const { signIn } = useGoogleLogin({
      onSuccess,
      onFailure,
      clientId,
      isSignedIn: true,
      accessType: 'offline',
  });

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Mind Map</HeroH1>
        <HeroP>
          Needs a good intro!
        </HeroP>
        <HeroBtnWrapper>
          <Button
            onClick={() => signIn()}            
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
            <img src={googleLogo} alt="google login" className="icon"></img>
            &ensp; Google Sign In {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;