import styled from "styled-components";
import { Link } from "react-router-dom";

export const Form = styled.form.attrs((props)=>{
    return{
        type:'sumbit'
    }
})`
    
    padding:10px 30px 20px;
    border-radius:3px;
    border:1px solid #2D4263;
`

export const InputForm = styled.input.attrs((props)=>{
    return{
        placeholder:`pleas enter your ${props.place}`,
        type:props.type?props.type:'text',
        value:props.value
    }
})`

    display:block;
    padding:10px 50px 10px 10px;
    font-size:17px;
    border-radius:3px;
    border:none;
    color:#2D4263;
    outline:1px solid #2D4263;
    transition:0.3s;
    margin-bottom:${props=>props.mb?props.mb:'0px'};
    &:focus{
        outline:2px solid #2D4263;
    }
`

export const ButtonForm = styled.button`
    display:block;
    background:inherit;
    border:1px solid #2D4263;
    border-radius:3px;
    cursor:pointer;
    transition:0.4s;
    padding:8px 15px;
    color:#2d4263;
    font-size:15px;
    &:hover{
        background:#2D4263;
        color:#fff
    }
`
export const TitleForm = styled.div`
    font-size:30px;
    color:#2D4263;
    margin-bottom:10px;
`

export const Error = styled.div`
    width:100%;
    font-size:14px;
    text-align:center;
    margin-top:${props=>props.mt?props.mt:'0px'};
    margin-bottom:${props=>props.mb?props.mb:'0px'};
    color:${props=>props.color?props.color:'black'};
`

export const Options = styled.div`
    position:relative;
`

export const Dropdown = styled.div`
    z-index:100;
    position: absolute;
    background-color:#fff;
    left:${params=>params.left};
    transition:0.3s;
    border:1.5px solid #2C3333;
    top:130%;
    border-radius:3px;
    width:100%;
    text-align:start;
  
`
export const DropdownFlex = styled.div`
    z-index:1000;
    padding:10px 10px;
    font-family: 'Poppins', sans-serif;
    & span{
        cursor:pointer;
        color:#FF1818;
        font-size:12px;
    }
`
export const DropdownText = styled.div`
    font-size:${a=>a.title?'12px':'14px'};
    opacity:${params=>params.title?'0.7':'1'};
    color:#395B64;
    
    margin-bottom:${a=>a.mb?a.mb:'0px'};
`
export const DropdownLink = styled(Link)`
    font-size:'14px';
    opacity:${params=>params.title?'0.7':'1'};
    color:#395B64;
    font-family: 'Poppins', sans-serif; 
    text-decoration:none;
    display:block;
    margin-bottom:5px;
`

export const SearchForm = styled.form.attrs({
    type:'sumbit'
})`
    width:100%;
    position:relative;
    display:flex;
    margin-top:10px;
    margin-bottom:40px;
    & span{
        position:absolute;
        top:130%;
        left:50%;
        font-size:18px;
        transform:translateX(-50%);
        color:#21325E;
    }
    & input{
        width:100%;
        margin-right:10px;
        padding:10px 10px;
        border:1px solid gray;
        outline:none;
        font-size:16px;
        transition:0.3s;
        border-radius:4px;
        color:#051367;
        &:focus{
            outline:1px solid #051367;
        }
    }
    & button{
        border-radius:3px;
        background:inherit;
        border:1px solid #051367;
        color:#051367;
        transition:0.3s;
        font-size:18px;
        padding:0px 15px;
        cursor:pointer;
        &:hover{
            background:#051367;
            color:#DFF6FF;
        }
    }
`

export const PostDiv = styled.div`
    padding:10px 30px;
    max-width:100%;
    border:1px solid #303841;
    border-radius:12px;
    margin-bottom:10px;
    color:#3A4750;
    position:relative;
    & .title{
        font-size:22px;
        font-family: 'Poppins', sans-serif;
        margin-bottom:20px;
        cursor:pointer;
    }
    & .text{
        font-size:18px;
        margin-bottom:10px;
    }
    & .username{
        position:absolute;
        top:5px;
        right:5px;
    }
    & button{
        padding:5px 15px;
        border-radius:4px;
        background:inherit;
        position:absolute;
        bottom:10%;
        right:1%;
        border:1px solid #DA1212;
        color:#DA1212;
        cursor:pointer;
        font-size:14px;
        transition:0.2s;
        &:hover{
            background:#DA1212;
            color:#EEEEEE;
        }
    }
`
export const CommentForm = styled(SearchForm)`
    display:block;
    text-align:center;
    margin-top:50px;
    & button{
        position:relative;
        margin:10px auto;
    }
`