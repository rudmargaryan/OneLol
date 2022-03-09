import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import {PostDiv} from '../../stylesComponent/Style'

export function Post({post,val}){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return(
        <PostDiv onClick={(e)=>{
            dispatch({
                type:'check',
                payload:post._id
            })
            navigate(`/post/see`)
        }}>
            <div className="title">{post.title}</div>
            <div className="text">{post.paragraph}</div>
            <div className='username'>{post.userName}</div>
        </PostDiv>
    )
}