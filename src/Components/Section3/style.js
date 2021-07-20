import {SectionContainer, Section} from "../GeneralStyle";
import styled from "styled-components";
import {FaPallet, FaMale, FaMixer, FaFemale, FaFedora} from "react-icons/fa";
import Pics from "../../assests/girl.jpg";
export const SectionContain = styled.section`
    background:linear-gradient(0deg,rgba(27, 40, 77, 0.942), rgba(27, 40, 77, 0.942)),url(${Pics});
    background-position:center center;
    background-size:auto
    width:100%;
    height:480px;


`

export const SectionHeading = styled.div`
    text-align:center;
    padding-top:${({top})=>(top ? "0px" : "35px")};
    margin-bottom:90px;

`

export const SectionH1 = styled.h1`
    color:${({black})=>(black ? "rgb(53, 52, 52)" : "rgb(240, 233, 233)")};
    font-size:35px;
    font-family:arial;
    letter-spacing:1px;
    font-weight:bold;
`

export const SectionP = styled.p`

    color:${({gray})=>(gray ? "gray" : "rgb(201, 192, 192)")};
    text-align:center;
    letter-spacing:0.8px;
    font-size:18px;

`

export const SectionS = styled(Section)`
    max-width:900px;
    position:relative;
`

export const SectionBody = styled.div`
    display:flex;
    text-align:center;
    justify-content:space-between;
    align-items:center;
    width:100%;
    border:.${({body})=>(body ? "none" : "1px solid orange")};
    height:120px;
    padding:20px;
`

export const SectionText = styled.span`
    display:block;
    color:rgb(177, 117, 7);
    padding-bottom:15px;
    font-size:15px;
    font-family:arial;
    
`

export const SectionBodyContent = styled.div`

    width:600px
    
`

export const SectionNum = styled.span`
    color:rgb(201, 192, 192);
    font-size:1.5rem;
    font-weight:bold;

`

export const SectionIcon = styled.div`
    font-size:34px;
    padding-bottom:7px;
    padding:10px;

`

export const Icon1 = styled(FaPallet)`
    color:#fff;
    width:100%;

`

export const Icon2 = styled(FaFedora)`
    color:#fff;
    width:100%;

`
export const Icon3 = styled(FaFemale)`
    color:#fff;
    width:100%;

`
export const Icon4 = styled(FaMale)`
    color:#fff;
    width:100%;

`