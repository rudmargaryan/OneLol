import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Footer, Header, HomeDiv, Title } from "../stylesComponent/Home"
import { Container, Flex, TextCenter } from "../stylesComponent/Standart"
import { ButtonForm, Error, Form, InputForm, TitleForm } from "../stylesComponent/Style"


export default function Login(){
    const [info,setInfo] = useState({
        name:'',
        password:'',
        text:''
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function Sumbits(e){
        e.preventDefault()
        if(info.name !== '' && info.password !== ''){
        fetch('/user/log',{
            method:'POST',
            headers: {
             'Content-Type': 'application/json'
           },
           body:JSON.stringify(info)
        })
        .then(response => response.json())
        .then((result) => {
            if(result.value==true){
                console.log(result)
                 dispatch({
                     type:'set',
                     payload:{
                         name:result.name,
                         userId:result.userId
                     }
                 })
                 navigate('/page')
            }else{
             setInfo((prev)=>{
                 return {
                     ...prev,
                     text:'User not found'
                 }
             })
            }
        })
        }else{
            setInfo({...info,text:'pleas fill all felds'})
        }
    }
    return(
        <HomeDiv>
            <Header>
                <Container>
                    <TextCenter>
                        <Title onClick={()=>navigate('/')}>
                            One <span>LoL</span>
                        </Title>
                    </TextCenter>
                </Container>
            </Header>
           <Container>
          <Flex jst='center'>
          <Form onSubmit={(e)=>Sumbits(e)}>
                <TextCenter>
                    <TitleForm>Login</TitleForm>
                </TextCenter>
                 <InputForm mb='10px' value={info.name} place='name' onChange={(e)=>{
                    setInfo({...info, name:e.target.value, text:''})
                }}/>
                 <InputForm type='password' value={info.password} mb='10px'  place='password' onChange={(e)=>{
                    setInfo({...info, password:e.target.value,text:''})
                }}/>
                <TextCenter>
                    <ButtonForm>Sumbit</ButtonForm>
                </TextCenter>
                
                <Error mt='10px' color='#C84B31'>
                    {info.text}
                </Error>
            </Form>
          </Flex>
           </Container>
        <Footer>
            Produced By Rud Margaryan
        </Footer>
        </HomeDiv>

    )
}
