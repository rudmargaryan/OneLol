import { memo } from "react";
import { Post } from "./Post";
import {Container} from '../../stylesComponent/Standart'

export default memo(function PostItem({posts}){
    return(
        <Container>
            {posts.map((e)=>{
                return <Post key={e._id} post={e} />
            })}
        </Container>
    )
})