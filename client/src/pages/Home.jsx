import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Footer, Header, HomeDiv, NavLink, Title } from "../stylesComponent/Home";
import { Container, Flex, Paragraph, TextCenter } from "../stylesComponent/Standart";



export default function Home(){
    const navigate = useNavigate()
    useEffect(async ()=>{
        await fetch('/user/login',
         )
        .then(result => result.json())
        .then((set) =>{
            if(set.value === true){
                navigate('/loading')
            }else{
            }
        })

    },[])
    return(
        <HomeDiv>
            <Header>
                <Container>
                    <Flex acenter>
                        <Title onClick={()=>navigate('/')}>
                            One <span>LoL</span>
                        </Title>
                        <div>
                            <NavLink to='/login'>Login</NavLink>
                            <NavLink reg="true"  to='/register'>Registration</NavLink>
                        </div>
                    </Flex>
                </Container>
            </Header>
            <Container>
                <TextCenter mt={'10px'} fz={'24px'} color={'#2C3333'}>
                    About Production
                </TextCenter>
                <Paragraph fz={'18px'} color={'#2C3333'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea quaerat sit, dolorem eum modi quo enim qui quia sequi sunt, nisi a dolores vel adipisci ipsam in architecto similique tempore?
                </Paragraph>
            </Container>
            <Footer>
                Produced Rud Margaryan
            </Footer>
        </HomeDiv>
    )
}