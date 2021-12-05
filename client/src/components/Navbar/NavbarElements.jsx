import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`

  background: #181717;
  height: 80px;
  width: 100%;
  margin-top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  border-radius: 30px;


  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavProfile = styled.img`
  height:40;
  weight:40;
  border-radius: 20px;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 600px;
`;

export const NavOption = styled(LinkR)`
  color: #fff;
  justify: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;
export const NavText = styled.strong`
  color: #fff;
  font-size: 1.5rem; 
  display: flex;
  align-items: center;
  margin-left: 24px;
`;