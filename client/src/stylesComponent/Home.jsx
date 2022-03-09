import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
export const Header = styled.div`
    width:100%;
    padding:5px 0px;
    background-color:#5463FF;
`;

export const GlobalStyles = createGlobalStyle`
    body{
        margin:0px;
        padding:0px;
        overflow-x:hidden;
        width:100%;
    }
`;

export const Title = styled.div`
    cursor:pointer;
    font-size:30px;
    color:#ECECEC;
    font-family: 'Anton', sans-serif;
    & span{
        color:#FFC300;
    }
`

export const NavLink = styled(Link)`
    text-decoration:none;
    border:1px solid ${props=>props.reg?'#424874':'#A6B1E1'};
    padding:5px 10px;
    margin-right:${props=>props.reg?'0px':'10px'};
    color: ${props=>props.reg?'#424874':'#A6B1E1'};
    transition:0.3s;
    font-size:18px;
    &:hover{
        background: ${props=>props.reg?'#424874':'#A6B1E1'};
        color: ${props=>props.reg?'#A6B1E1':'#424874'};
    }
`

export const HomeDiv = styled.div`
    width:100%;
    min-height:100vh;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
`

export const Footer = styled.footer`
    width:100%;
    text-align:center;
    padding:10px 0px;
    font-family: 'Poppins', sans-serif;
    font-size:18px;
    background:#141E27;
    color:#A6B1E1;
`