import { useState } from "react"
import { useRef } from "react"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Comments from "./Comments"
import { Footer, Header, HomeDiv, Title } from "../stylesComponent/Home"
import { Container, Div, Flex } from "../stylesComponent/Standart"
import {CommentForm, Dropdown, DropdownFlex, DropdownLink, DropdownText, Options, PostDiv, SearchForm } from "../stylesComponent/Style"
import { Button } from "../stylesComponent/Buttons"


export function See(){
    const id = useSelector((state=>state.check))
    const user = useSelector((state=>state.user))
    const navigate = useNavigate()
    const [postInfo,setPostInfo] = useState({
        comments:[]
    })
    const [stylesInfo,setStylesInfo] = useState({
        left:'200%'
    })
    const [info,setInfo]= useState('')
    useEffect(async ()=>{
        if(id.length>0){    
            await fetch(`/api/seePost/${id}`)
            .then(res=>res.json())
            .then(result=>setPostInfo(result))

        }else{
            navigate('/loading')
        }
    },[])
    return(
        <HomeDiv>
        <div>
        <Header>
            <Container>
                <Flex acenter>
                    <Title onClick={()=>navigate('/')}>
                        One <span>LoL</span>
                    </Title>
                    <Options>
                        <Button onClick={(e)=>{
                            stylesInfo.left == '0%' ? setStylesInfo({...stylesInfo,left:'200%'}):setStylesInfo({...stylesInfo,left:'0%'})
                        }} cursor hover colorHover='#2666CF' color='#2C3333' colorBorder='#2C3333' p='5px 15px'>
                            <Flex acenter>
                                My Account
                            </Flex>
                           
                        </Button>
                        <Dropdown left={stylesInfo.left}>
                            <DropdownFlex>
                                <DropdownText mb='10px' title>{user.name}</DropdownText>
                                <DropdownLink to='/post/mypage'>
                                    My Posts
                                </DropdownLink>
                                <span onClick={async (e)=>{
                                    await fetch('/user/logout')
                                    navigate('/')
                                }}>log out</span>
                            </DropdownFlex>
                        </Dropdown>
                    </Options>
                </Flex>
            </Container>
        </Header>
        <Div m='30px 0px 30px 0px'>
                <PostDiv  >
                    <div className="title">{postInfo.title}</div>
                    <div className="text">{postInfo.paragraph}</div>
                    <div className='username'>{postInfo.userName}</div>
                    <div>Comments`</div>
                    <Comments comments={postInfo.comments.length>0 ? postInfo.comments : []}/>
                   <CommentForm onSubmit={async (e)=>{
                e.preventDefault()
                await fetch(`/api/seePost/addComment/${id}/${info}/${user.name}`)
                .then(res=>res.json())
                await fetch(`/api/seePost/${id}`)
                .then(res=>res.json())
                .then(result=>setPostInfo(result))
            }}>
                       <input value={info}  onChange={(e)=>{
                            setInfo(e.target.value)
                        }}/>
                       <button className="comment-button">Add</button>
                   </CommentForm>
                </PostDiv>
       </Div>
        </div>
        <Footer>
            Produced Rud Margaryan
        </Footer>
    </HomeDiv>
        
    )
}