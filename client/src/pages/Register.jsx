import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { validate, Validate } from "./Validate";
import { Footer, Header, HomeDiv, Title } from "../stylesComponent/Home"
import { Container, Flex, TextCenter } from "../stylesComponent/Standart"
import { ButtonForm, Error, Form, InputForm, TitleForm } from "../stylesComponent/Style"

export function Register(){
    const [info,setInfo] = useState({
        name:'',
        password:'',
        confirm:'',
        text:''
    });
    const navigate = useNavigate()
    function Sumbits(e){
        e.preventDefault()
        const val = validate(info)
        if(val){
            fetch('/user/reg',{
                method:'POST',
                headers: {
                 'Content-Type': 'application/json'
               },
               body:JSON.stringify(info)
            })
            .then(result => result.json())
            .then((res)=>{
                if(res.text == ''){
                    navigate('/')

                }else{
                    setInfo({name:'',password:'',confirm:'',text:res.text})
                }
            })
        }else{
            if(info.name.length<5){
                setInfo({...info,text:'minimum symbols in name was `5'})
            }else if(info.password.length<7){
                setInfo({...info,text:'minimum symbols in password was `7'})
            }else{
                setInfo({...info,text:'password was not match'})
            }
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
                    <TitleForm>Register</TitleForm>
                </TextCenter>
                 <InputForm mb='10px' place='name' value={info.name} onChange={(e)=>{
                    setInfo({...info, name:e.target.value, text:''})
                }}/>
                 <InputForm type='password' mb='10px' value={info.password}  place='password' onChange={(e)=>{
                    setInfo({...info, password:e.target.value,text:''})
                }}/>
                  <InputForm type='password' mb='10px' value={info.confirm}  place='password' onChange={(e)=>{
                    setInfo({...info, confirm:e.target.value,text:''})
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