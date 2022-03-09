import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate,Link } from "react-router-dom"
import PostItem from "./posts/PostItem"
import {memo} from 'react'
import styled from 'styled-components'
import { useRef } from "react"
import { Footer, Header, HomeDiv, Title } from "../stylesComponent/Home"
import { Container, Flex } from "../stylesComponent/Standart"
import {Dropdown, DropdownFlex, DropdownLink, DropdownText, Options, SearchForm } from "../stylesComponent/Style"
import { Button } from "../stylesComponent/Buttons"

export default memo(function Pag(){
   //consts
    const store = useSelector((state)=>state.user)
    const posts = useSelector((state)=>state.posts)
    const find =  useSelector((state)=>state.search)
    const [searchText,setSearchText] = useState('')
    const [error,setError] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate('')
    const [stylesInfo,setStylesInfo] = useState({
        left:'200%'
    })
    //start
    useEffect(async ()=>{
        if(store.name == '' || store.name == undefined){
            navigate('/loading')
        }
        await fetch('/api/all')
        .then(result=>result.json())
        .then(res=>dispatch({
            type:'allget',
            payload:res
        }))
    },[])
    //search
    function search(e){
        e.preventDefault()
        let forret = []
        let search = searchText.split(' ')
        if(searchText==''){
            navigate('/loading')
        }
        for(let i = 0;i<search.length;i++){
            for(let z = 0;z<=posts.length;z++){
                let poststitle
                if(posts[z]){
                    poststitle = posts[z].title;
                    poststitle = poststitle.split(' ')
                    for(let g = 0; g<poststitle.length;g++){
                        if(poststitle[g]===search[i]){
                            if(forret.includes(posts[z])){
                            }else{
                                forret.push(posts[z])
                            }
                            break;
                        }
                        for(let d = 0;d<search[i].length;d++){
                            if(poststitle[g].includes(search[i][d])){
                                if(forret.includes(posts[z])){
                                }else{
                                    forret.push(posts[z])
                                }
                                break;
                            }
                        }
                        
                    }
                }else{

                }
              
            }
        }
        
        if(forret.length==0){
            setError('Not Found')
            dispatch({
                type:'search',
                payload:[]
            })
        }else{
            setError(`elements ${forret.length} `)
            dispatch({
                type:'search',
                payload:forret
            })
        }
    }

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
                <SearchForm onSubmit={e=>search(e)}> 
                    <input type="text" placeholder="enter text"value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}/>
                    <button>
                        Search!
                    </button>
                    <span>{error}</span>
                </SearchForm>
                <PostItem posts={error.length>0?find:posts }/>
            </Container>
            </div>
            <Footer>
                Produced Rud Margaryan
            </Footer>
        </HomeDiv>
    )
})