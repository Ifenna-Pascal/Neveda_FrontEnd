import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import styled from "styled-components";

export const BodyContent = styled.div`
    background:rgb(245, 240, 240);
    width:100%;
    height:40%; 
    margin-top:-13px;
    text-align:center;
    padding-top:14px;
`
export const SectionImg = styled.div`
    width:100%;
    height:60%;
`

export const Img = styled.img`
    width:100%;
    height:100%

`

export const SectionContent = styled.div`
    width:220px;
    height:340px;

    border-bottom:5px solid rgb(202, 166, 6);
    
    
`



export const BodyH1 = styled.h1`
    font-size:1rem;
    color:rgb(53, 52, 52);
    
`
export const BodyP = styled.p`
    font-size:0.8rem;
    color:orange;
    font-weight:bold;
    font-family:arial

`

export const SectionBodyContain = styled.div`
    max-width:${({max})=>(max ? "1050px" : "950px")};
    margin: 10px auto;
    margin-top:-30px;
`

export const Contain = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center; 
`

export const Media = styled.div`
    display:flex;
    text-align:center;
    justify-content:space-between;
    max-width:120px;
    margin:0 auto;
`

export const MediaHandle = styled.div`
    width:20px;
    height:20px;
    background:#fff;
    border-radius:50%;
    margin-right:5px;
    clip-path:cirlce(50%);
    border:1px solid gray;
    padding:3px;
`

export const FaceBook = styled(FaFacebookF)`
    text-align:center;
    font-size:15px;
    background:transparent;

`
export const  Twitter = styled(FaTwitter)`
text-align:center;
font-size:15px;
background:transparent;
`

export const Instagram = styled(FaInstagram)`
text-align:center;
font-size:15px;

`