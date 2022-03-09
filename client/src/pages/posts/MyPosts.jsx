import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Div } from "../../stylesComponent/Standart"
import {PostDiv} from '../../stylesComponent/Style'

export default function MyPosts({posts}){
    const navigate= useNavigate()
    const dispatch = useDispatch()
    return(
       <Div m='30px 0px 30px 0px'>
           {posts.map((e)=>{
               return(
                <PostDiv key={e._id} >
                    <div className="title" onClick={()=>{
                    dispatch({
                        type:'check',
                        payload:e._id
                    })
                    navigate(`/post/see`)
                }}>{e.title}</div>
                    <div className="text">{e.paragraph}</div>
                    <div className='username'>{e.userName}</div>
                    <button onClick={async ()=>{
                        await  fetch(`/api/deletes/${e._id}`)
                        .then(res=>res.json())
                        .then(re=>alert(re.message))
                        navigate('/loading')
                    }}>DELETE</button>
                </PostDiv>
               )
           })}
       </Div>
    )
}