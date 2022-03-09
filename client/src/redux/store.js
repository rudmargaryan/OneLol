import { createStore } from "redux";


const store = createStore((state,action)=>{
    if(action.type === 'set'){
        return {
            ...state,
           user:{
                name:action.payload.name,
                userId:action.payload.userId
           }
        }
        
    }else if(action.type === 'allget'){
        return {
            ...state,
            posts:action.payload
        }
    }else if(action.type === 'setmy'){
        return{
            ...state,
            myPosts:action.payload
        }
    }else if(action.type === 'check'){
        return{
            ...state,
            check:action.payload
        }
    }else if(action.type === 'search'){
        return{
            ...state,
            search:action.payload
        }
    }
    return state
},{
    user:{
        name:'',
        userId:''
    },
    posts:[],
    myPosts:[],
    check:'',
    search:[]
})

export default store