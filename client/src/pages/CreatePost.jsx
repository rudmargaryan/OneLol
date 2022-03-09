import { useEffect } from "react"
import { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Footer, Header, HomeDiv, Title } from "../stylesComponent/Home"
import { Container, Flex, TextCenter } from "../stylesComponent/Standart"
import { ButtonForm, Error, Form, InputForm, TitleForm } from "../stylesComponent/Style"

export default function CreatePost(){
    const navigate = useNavigate()
    const user = useSelector((state)=>state.user)
    useEffect(async ()=>{
        if(user.userId.length<4){
            navigate('/post/mypage')
        }
    },[])
    const [info,setInfo] = useState({
        
        title:'',
        paragraph:'',
        error:''
    })
    async function Sumbits(e){
            e.preventDefault()
            if(info.title.length <5 && info.paragraph.length <5){
                setInfo({
                    ...info,
                    error:'please write correctly'
                })
            }else{
                alert('send')
                const send = {
                    title:info.title,
                    paragraph:info.paragraph,
                    userId:user.userId,
                    userName:user.name,

                }
                await fetch('/api/create',{
                    method:'POST',
                    headers: {
                     'Content-Type': 'application/json'
                   },
                   body:JSON.stringify(send)
                })
                .then(res=>res.json())
                .then(result=>result.messeage.length>0 ? navigate('/post/mypage'):alert(result.message))
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
                <TitleForm>Create Post</TitleForm>
            </TextCenter>
             <InputForm mb='10px' value={info.title} place='title' onChange={(e)=>{
                setInfo({...info, title:e.target.value, text:''})
            }}/>
             <InputForm value={info.paragraph} mb='10px'  place='text' onChange={(e)=>{
                setInfo({...info, paragraph:e.target.value,text:''})
            }}/>
            <TextCenter>
                <ButtonForm>Create</ButtonForm>
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