import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
    max-width:1140px;
    margin:0px auto;
    @media (max-width: 998px) {
        max-width: 772px;
        width: 772px;
    };
    @media (max-width: 1100px) {
        max-width: 998px;
        min-width: 772px;
    }
`

export const Flex = styled.div`
    display:flex;
    justify-content: ${props=>props.jst?props.jst:'space-between'};
    align-items:${props=>props.acenter? 'center':''}
`

export const TextCenter = styled.div`
    margin-top:${props=>props.mt?props.mt:'0px'};
    width:100%;
    text-align:center;
    display:flex;
    justify-content:center;
    color:${props=>props.color?props.color:'black'};
    font-size:${props=>props.fz?props.fz:'16px'};
`

export const Paragraph = styled.p`
    color:${params=>params.color?params.color:'black'};
    font-size:${props=>props.fz?props.fz:'16px'};
    font-family: 'Poppins', sans-serif;
`

export const Div = styled.div`
    margin:${a=>a.m?a.m:'0px'};
    padding:${a=>a.p?a.p:'0px'};

`