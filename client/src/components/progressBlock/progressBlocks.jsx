import styled from "styled-components";

export const Card = styled.div`

    position: absolute;
    left: 3.4%;
    right: 71.18%;
    top: 16.50%;
    bottom: 70.72%;

    background: #242424;
    // box-shadow: 6px 5px 4px rgba(0, 0, 0, 0.5);
    border-radius: 20px;

`;

export const TotalBar = styled.div`
    // position: absolute;
    // height: 50%;
    // width: 50%;
    position: absolute;
    left: 8.61%;
    // right: 71.18%;
    top: 40.00%;
    bottom: 20%;
    width: 82%;

    background: #D8D8D8;
    box-shadow: 6px 5px 4px rgba(0, 0, 0, 0.5);
    border-radius: 8px;

`;

export const ProgressBar = styled.div`
    position: absolute;
    // left: 8.61%;
    // right: 76.67%;
    // top: 20.22%;
    // bottom: 74.22%;
    height: 100%;
    width: ${props => props.width ? props.width : 'auto'};

    background: #01FD17;
    border-radius: 8px;
`;

export const ProgressHeading = styled.div`
    position: absolute;
    left: 8.61%;
    // right: 76.67%;
    top: 10.00%;
    bottom: 65.00%;
    // height: 100%;
    width: 80%;

    color: #FFFFFF;
    justify-content: center;
    text-align: center;
    // font-weight: bold;
    // font-family: "Lucida Console", "Courier New", monospace;
    font-family: "Roboto";
    font-style: normal;
    // font-weight: normal;
    font-size: x-large;
    

    // background: blue;
    border-radius: 8px;
`;