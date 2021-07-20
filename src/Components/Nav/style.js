import styled from "styled-components";
import {FaPhone, FaArrowAltCircleUp} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";
import {Link} from "react-scroll";

export const NavigationContainer = styled.nav`
    width:100%;
    height:130px;
    position:sticky;
    top:0;
    z-index:1000;
`

export const FirstNavigation = styled.div`
    background:rgba(2, 15, 51, 0.842);
    height:38%;
    display:flex;
    align-items:center;
    justify-content:center;
    display:${({scrollNav})=>(scrollNav ? "none" : "")};
    
`

export const Bottom = styled(FaArrowAltCircleUp)`
    position:fixed;
    bottom:40px;
    right:50px;
    background:rgba(66, 114, 247, 0.842);
    padding:15px;
    border:none;
    border-radius:30px;
    text-align:center;
    color:white;
    font-size:40px;
    vissibility:${({scrollNav})=>(scrollNav ? "vissible" : "none" )};

   

`

export const SecondNavigation = styled.div`
    height:65%;
    width:100%;
    background:${({scrollNav})=>(scrollNav ? "rgba(2, 15, 51, 0.95)" : "#fff" )};
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction-column;
    


`

export const NavWrapper = styled.div`
    max-width:1200px;
    margin:0 auto;
    width:100%;
    
    

`
export const NavContent = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:10px;

`
export const ContentLeft = styled.div`
    padding:15px;
    display:flex;
    width:40%;
    justify-content:space-between;
`

export const ContentRight = styled.ul`
    text-align:center;
    padding:20px 10px;
    margin-top:${({top})=> (top ? "5px" : " ")};
    color:${({scrollNav})=>(scrollNav ? "#fff" : "gray" )};

`
export const ContentLeft1 = styled.div`
    text-align:center
`
export const NavIcon = styled.span`
    margin-right:14px;
`
export const PhoneNumber = styled.span`
    color:white;
    font-size:0.8rem
`

export const Phone = styled(FaPhone)`
    color:white;
    font-size:20px;
    transform:rotate(360deg)
`
export const Email = styled(AiOutlineMail)`
    color:white;
    font-size:20px
`
export const NavLink = styled(Link)`
    text-decoration:none;
    margin-right:25px;
    color: ${({color})=>(color ? "white" : "gray")};
    padding:2px 15px;
    border-left:1px solid gray;
    text-align:center;
    font-size:${({size})=>(size ? "0.8rem" : "1.03rem")};
    letter-spacing:1px;
    font-weight:bold;
    &.active {
        color:rgb(252, 101, 0);
        
   };
    
`
export const NavLogo = styled.div`
    width:110px;
    padding:10px 10px;
`
export const Img = styled.img`
    width:100%
`