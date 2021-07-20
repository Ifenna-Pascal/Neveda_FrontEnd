import styled from "styled-components";
import Hero from "../../assests/girl.jpg"
export const SectionContainer = styled.section`
    
    height:calc(100vh - 130px);
    background:linear-gradient(0deg,rgba(27, 40, 77, 0.842), rgba(27, 40, 77, 0.842)),url(${Hero});
    background-position:center center;
    background-size:auto
`
export const SectionWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    max-width:900px;
    margin: auto;
    width:100%;
`
export const SectionContent = styled.div`
    text-align:center;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-top:130px;
    padding:15px;
`
export const SectionH1 = styled.h1`
    font-size:4.5rem;
    color:white;
    letter-spacing:2px;
    line-height:0px;
    font-weight:700;
`
export const SectionP = styled.p`
    color:white;
    width:100%;
    tetx-align:center;
    font-family:arial;
    margin-bottom:35px;
    line-height:28px;
    letter-spacing:1px;
    font-size:16px;
`
export const SectionBtn = styled.button`
    border:none;
    background:rgb(252, 101, 0);
    padding:15px 25px;
    font-size:1rem;
    color:white;
    width:200px;
    letter-spacing:2px;
    text-transform:uppercase;
    font-weight:800

`