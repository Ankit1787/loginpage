import styled from "styled-components";

const LoginContainer = styled.div`

display: grid;
place-items: center;
height: 90vh;
padding:60px 0;
background-size: cover; 
background-position: center;


position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
              
            
`;

const VideoContainer = styled.div`
  
`;

const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2); /* Add an overlay to make the text more readable */
`;

const VideoBackground = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  /* Add your content styles here */
`;

const Wrapper = styled.div`
display: flex;
justify-content: space-around;
width: 80%;
min-width: 200px;
background:none;
@media(max-width:1024px){
width:90%;
min-width:400px;
}
`;
const Box1 = styled.div`
display: grid;
place-items: center;
width: 20%;
height:100%
min-width: 200px;
@media(max-width:1024px){
    display:none;
   }
   -webkit-animation: text-shadow-drop-center 0.6s both;
        animation: text-shadow-drop-center 0.6s both;
        @-webkit-keyframes text-shadow-drop-center {
            0% {
              text-shadow: 0 0 0 rgba(0, 0, 0, 0);
            }
            100% {
              text-shadow: 0 0 18px rgba(0, 0, 0, 0.35);
            }
          }
          @keyframes text-shadow-drop-center {
            0% {
              text-shadow: 0 0 0 rgba(0, 0, 0, 0);
            }
            100% {
              text-shadow: 0 0 18px rgba(0, 0, 0, 0.35);
            }
          }
          
`;
const Image = styled.img`
width:100%;
height:100%
object-fit:cover;

          
`;
const Box2 = styled.div`
width: 50%;
min-width: 200px;
display: grid;
place-items: center;
position:relative;
z-index:3;
padding: 4vmax 3vmax;
box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
@media(max-width:1024px){
  
    min-width:400px;
    }
@media(max-width:534px){
  width:90%;
  min-width:100px;
    }
`;
const Form = styled.form`
display: grid;
padding: 4vmax 3vmax;
place-items: center;
width: 100%;
`;
const Input = styled.input`
border: 1px solid #04072f66;

width: 100%;
color: #727b85;
font-family: "Poppins", Helvetica;
font-size: 18px;
font-weight: 400;
margin: 20px 0;
padding: 8px 35px;
border-radius: 5px;
background: #fff;
box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.16);
&:focus {
    outline-color:#1575a7;
    outline-width: 2px; 
} 




`;
const Div = styled.div`
width: 100%;
position: relative;
`;
const Button = styled.button`
padding: 15px 0;

width: 80%;
 margin:20px 0;
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 110%;
color: var(--white-color, #fff);
border-radius: 8px;
background: var(--Primary---1, #1575a7);
box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.16);
outline:none;
${({ active }) =>
active &&
`

outline:3px solid black;
outline-offset:1px;
`}

  

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }
  
`;
const Heading = styled.h1`
color: #04072f;
font-family: "Poppins", Helvetica;
font-size: 48px;
font-weight: 700;

text-align: center;

white-space: nowrap;
margin: 0 auto;
width: fit-content;
`;
const Icon = styled.div`
position: absolute;
right:20px;
top:35px;

`;
const Text = styled.h1`
color: #00000033;
font-family: "Poppins", Helvetica;
font-size: 18px;
font-weight: 500;

color: #04072e;
`;
const Password = styled.div`
display: flex;
position:relative;
width: 100%;
`;
const Checkbox =styled.input`
border-radius: 4px;
border: 1px solid #737B86;
color: #737B86;

&:active {
background-color: darkgreen;
border-color: darkgreen;
}
`
const Paragraph =styled.p`
color: var(--Light-Color---1, #737B86);
/* Body Light - Regular - 18 */
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 110%; 
`
const Paragraph2=styled(Paragraph)`
color: #04072F;

padding:20px 0;

`
const FormLinks =styled.div`
width:100%;
display:flex;
align-items:center;

padding:5px 0 2px  10px;
column-gap:10px;
align-items:start;

`
const Link = styled.a`
color: var(--Secondary---1, #F78719);
text-decoration: underline; 
cursor: pointer;

&:hover {
color: #0056b3; /* Change color on hover */
}
`;

export const utils = {LoginContainer,VideoContainer,VideoOverlay,VideoBackground,Content,Wrapper,Box1,Image,Box2,Form,Input,Div,Button,Heading,Icon,Text,Password,Checkbox,Paragraph,Paragraph2,FormLinks,Link};