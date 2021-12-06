import React from "react";
import { IconContext } from "react-icons/lib";
import { useGoogleLogout } from 'react-google-login';
import {
  Nav,
  NavbarContainer,
  NavOption,
  NavProfile,
  NavText
} from "./NavbarElements";

const clientId = '707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com';


const Navbar = () => {

  const onLogoutSuccess = (res) => {
      console.log('Sign out Success');
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

  const authData = JSON.parse(localStorage.getItem("userToken"));

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav >
          <NavbarContainer>
            <NavProfile src={authData.imageUrl || 'null'} alt="user profile"></NavProfile>
            {/* <img  /> */}
            <NavText>
            User:&nbsp; {authData.name || 'null'}
            </NavText>
            <NavOption onClick={signOut} to="/">
              Sign Out
            </NavOption>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;