import { useEffect,useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import MyPosts from "./posts/MyPosts"
import { Footer, Header, HomeDiv, Title } from "../stylesComponent/Home"
import { Container, Flex } from "../stylesComponent/Standart"
import { Dropdown, DropdownFlex, DropdownLink, DropdownText, Options } from "../stylesComponent/Style"
import { Button } from "../stylesComponent/Buttons"

export default function MyPost(){
    const user = useSelector((state)=>state.user)
    const posts = useSelector((state)=>state.myPosts)
    const dispatch = useDispatch()
    const navigate= useNavigate()
    const store = useSelector((state)=>state.user)
    const [stylesInfo,setStylesInfo] = useState({
        left:'200%'
    })
    //start
    useEffect(async ()=>{
        if(user.userId.length<4){
            navigate('/loading')
        }else{
            console.log(user.userId)
        await fetch(`/api/mypage/take/${user.userId}`)
        .then(response=>response.json())
        .then(result=>dispatch({
            type:'setmy',
            payload:result.posts
        }))
        console.log(posts)
        }
    },[])
    //jsx
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
                                <DropdownText mb='10px' title>{store.name}</DropdownText>
                                <DropdownLink to='/post/mypage'>
                                    My Posts
                                </DropdownLink>
                                <DropdownLink to='/post/mypage/createpost'>
                                    Creat Post
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
      <Container>
      <MyPosts posts={posts}/>
      </Container>
        </div>
        <Footer>
            Produced Rud Margaryan
        </Footer>
    </HomeDiv>
    )
}