import {NavContent, NavIcon, NavLink, NavWrapper,Email, Img, Bottom, NavLogo, NavigationContainer, ContentLeft, ContentRight, ContentLeft1, ContentLeft2, Phone, PhoneNumber, FirstNavigation, SecondNavigation} from "./style";
import Logo from "../../assests/nev.png";
import {useState, useEffect} from "react";
import {animateScroll as scroll} from "react-scroll";
import { render } from "@testing-library/react";

function Navigation(){
    const [scrollNav, setScrollNav] = useState(false);
    const [Icons, setIcons] = useState(false);
    const changeNav = ()=>{
        if(window.scrollY >= 100){
           
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    const setIcon = ()=>{
        if(window.scrollY >=250){
            setIcons(true)
        }
        else{
            setIcons(false)
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll", changeNav)
        window.addEventListener("scroll", setIcon)
    },[]);

    const toggleHome = ()=>{
        scroll.scrollToTop()
    }
    if(Icons){
        render(
               
            <Bottom  onClick={toggleHome} scrollNav={scrollNav}></Bottom>
        )
    }else{
        render("")
    }
    return(
        <NavigationContainer>
            <FirstNavigation scrollNav={scrollNav}>
                    <NavWrapper>
                        <NavContent>
                            <ContentLeft>
                                <ContentLeft1>
                                    <NavIcon><Phone/></NavIcon>
                                    <PhoneNumber>(+234) -9052650619</PhoneNumber>
                                </ContentLeft1>
                                <ContentLeft1>
                                    <NavIcon><Email/></NavIcon>
                                    <PhoneNumber>ifennamonanu70@gmail.com</PhoneNumber>
                                </ContentLeft1>
                            </ContentLeft>
                            <ContentRight>
                                <NavLink color size>Login</NavLink>
                                <NavLink color size>Settings</NavLink>
                                <NavLink color size>English</NavLink>
                            </ContentRight>
                        </NavContent>
                    </NavWrapper>
            </FirstNavigation>
            <SecondNavigation scrollNav={scrollNav}>
                    <NavWrapper>
                        <NavContent>
                            <ContentLeft>
                                <NavLogo onClick={toggleHome}><Img src={Logo}/></NavLogo>
                            </ContentLeft>
                            <ContentRight top scrollNav={scrollNav}>
                                <NavLink to="home"smooth={true}
                        duration={500}
                        offset={-84}
                        spy={true}
                        exact="true"
                        >Home</NavLink>
                                <NavLink to="about"
                                smooth={true}
                                duration={500}
                                offset={-84}
                                spy={true}
                                exact="true"
                                >About</NavLink>
                                <NavLink to="courses"
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-84}
                                exact="true"
                                >Courses</NavLink>
                                <NavLink to="events"
                                smooth={true}
                                duration={500}
                                offset={-84}
                                spy={true}
                                exact="true"
                                >Event</NavLink>
                                <NavLink to="blog"
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-84}
                                exact="true"
                                >Blog</NavLink>
                                <NavLink to="contact"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-84}
                                >Contact</NavLink>
                            </ContentRight>
                        </NavContent>
                   </NavWrapper>
            </SecondNavigation>
        </NavigationContainer>
    )
}

export default Navigation;