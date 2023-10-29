import React, { useState } from "react";
import styled from "styled-components";
import backgroundImage from "../../assets/2.jpg";
import {utils} from "./utils"
import "./home.css"
import { BiHide, BiShowAlt } from "react-icons/bi";
const Home = () => {
  const {LoginContainer,VideoContainer,VideoOverlay,VideoBackground,Content,Wrapper,Box1,Image,Box2,Form,Input,Div,Button,Heading,Icon,Text,Password,Checkbox,Paragraph,Paragraph2,FormLinks,Link} =utils
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
 
  const [isActive, setIsActive] = useState(false);

  const img =
    "https://cdn.animaapp.com/projects/653d11cb17731749ea04b088/releases/653d1297cd8ee16afc06077d/img/group-3608-1@2x.png";
 
const Loader=styled.span`

    height:5px;
   
    border: 5px solid #fff;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    
`
const handleChange=(e)=>{
    const {name,value}=e.target;

    setUserData({...userData,[name]:value})
}
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    setIsActive(true)
    setTimeout(() => {
        setIsActive(false)
      
    }, 100);
 
  };
  const handleActive=()=>{
   
  }
 

  return (
    
    
   
    <LoginContainer>
    <VideoBackground autoPlay muted loop>
      <source src="https://mazwai.com/videvo_files/video/free/2015-09/small_watermarked/postcard_from_big_sur_preview.webm" type="video/webm"  />
      
    </VideoBackground>
    <VideoOverlay />
      <Wrapper>
        <Box1>
         
        </Box1>
        <Box2>
          <Heading>Login</Heading>
          <Form onSubmit={handleSubmit}>
            <Div>
              <Text>Login Id</Text>
              <Input type="email" placeholder="username" name="email" value={userData.email} onChange={handleChange}/>
            </Div>
            <Div>
              <Text>Password</Text>
              <Password>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                value={userData.password}
                name="password"
                onChange={handleChange}
              />

              <Icon>
                {!showPassword ? (
                  <BiHide onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <BiShowAlt onClick={() => setShowPassword(!showPassword)} />
                )}
              </Icon>
              </Password>
            </Div>

          
            <FormLinks>
            <Checkbox type="checkbox" name="" id=""  />
            <Paragraph>Remember me </Paragraph>
            </FormLinks>
            <FormLinks>
            <Checkbox type="checkbox" name="" id=""  />
            <Paragraph>Agree to  <Link href="#id">Terms & conditons</Link> </Paragraph>
            </FormLinks>
            <Button type="submit"  active={isActive} >Login </Button>
           
             <Paragraph2>Don't have an account? <Link href="#id">Sign Up</Link></Paragraph2> 
            
          </Form>
        </Box2>
      </Wrapper>
    </LoginContainer>
   
  );
};

export default Home;
