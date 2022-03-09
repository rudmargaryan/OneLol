import { useEffect } from "react";
import { memo } from "react";
import styled from "styled-components";


export default memo(function Comments({comments}){
    const Comment = styled.div`
        margin-top:10px;
        display:flex;
        & .titleC{
            font-size:18px;
            font-style:bold;

        }
        & .textC{
            margin-left:10px;
        }
    `
    return(
        <div>
            { comments.map(e=>{
                return(
                    <Comment key={Math.random()}>
                        <div className="titleC">{e.userName}:</div>
                        <div className="textC">{e.comment}</div>
                    </Comment>
                    
                )
            })}
        </div>
    )
})  