import styled from "styled-components";

export const Button = styled.button`
    ${params=>params.cursor?'cursor:pointer':''};
    padding:${params=>params.p?params.p:'0px'};
    margin:${params=>params.m?params.m:'0px'};
    background:${params=>params.colorB ? params.colorB :'inherit'};
    color:${params=>params.color ? params.color :'black'};
    border:1px solid ${params=>params.colorBorder ? params.colorBorder :'black'};
    display:${params=>params.flex ?  'flex' :'auto'};
    font-size:18px;
    transition:0.3s;
    ${params=>params.hover
        ?
        `
        &:hover{
            color:${params.colorHover};
            background:${params.colorBorder};
        };
        `
        :''
    };
`