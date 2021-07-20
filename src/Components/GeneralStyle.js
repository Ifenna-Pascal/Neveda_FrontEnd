import styled from "styled-components";
import {SectionBtn} from "../Components/Hero/style";

export const SectionContainer = styled.section`
    height:${({height})=>( height  ? "600px" : "500px")};
    width:100%;
    background:${({bg})=> ( bg ? "rgb(241, 239, 239)" :"#fff")};
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

export const SectionWrapper = styled.div`
    
    width:100%;
    
    
`

export const Section= styled.div`
    max-width:1200px;
    margin:0 auto;
    width:100%;
`

export const SectionContent = styled.div`
     display:flex;
     align-items:center;
     flex-direction:${({Start})=> (Start ? "row-reverse" : "row")};
     justify-content:space-between;
    padding:15px 25px;
`

export const Content1 = styled.div`
    width:100%;
    flex-basis:50%;
    padding:15px;
    text-align:left;
    margin-left:30px;
    
`

export const Content2 = styled.div`
    width:100%;
    padding:30px 0px;
    flex-basis:50%;
    height:490px;

`
export const Hr = styled.hr`
    width:90px;
    margin-top:-10px;
    height:2px;
    background:orange;
    border:none;
`
export const Img = styled.img`
    width:100%;
    height:100%;
`

export const SectionH1 = styled.h1`
    font-size:2.4rem;
    font-family:arial;
    text-align:left;
    line-height:18px;
    color:rgb(53, 52, 52);
`

export const SectionP = styled.p`
    color:gray;
    line-height:24px;

    font-size:17px;
    padding:17px 30px 17px 0px;

`
export const SectionBtns = styled(SectionBtn)`
    align-self:start;
    
`
export const SectionListing = styled.ul`
    text-align:left;
    color:gray;
    margin-left:-22px
    

`
export const ListItem = styled.li`
    margin-bottom:14px;
    font-size:17px;
    list-style-type:none;
    &:before {
        content: "*";   
        color: rgb(252, 101, 0); 
        font-weight: bold;  
        display: inline-block; 
        width: 1em; 
        font-size:27px;
        margin-right: 0em;
    
    }
`
