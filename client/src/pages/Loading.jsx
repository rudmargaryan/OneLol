import { memo, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"


export default  function Loading(){
    const navigate = useNavigate()
    const selector = useSelector(state=>state.user)
    const dispatch = useDispatch()
    useEffect(async ()=>{
        await fetch('/user/login',
         )
        .then(result => result.json())
        .then((set) =>{
            dispatch({
                type:'set',
                payload:{
                    name:set.name,
                    userId:set.userId
                }
            })
            if(set.value === true){
                setTimeout(()=>navigate('/page'),300)
            }else{
                navigate('/login')
            }
        })

    },[])
    return(
        <div>
           loading...
        </div>
    )
}

