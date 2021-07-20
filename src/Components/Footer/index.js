// import { SectionH1, SectionS, SectionP, SectionHeading} from "../Section3/style";
import {SectionWrapper,Section, SectionContent, Img, SectionContainer, Hr} from "../GeneralStyle";
import {SectionContain,Content3,SectionDiv, UlHolder,ContentHead, Sections, SectionP, Content2, Content, Content1, ImgDiv, SubInput, SectionLi, SectionLine,SectionUl, Envelope, } from "./style";
// import {SectionImg, BodyContent,BodyH1, BodyP, SectionBodyContain, Contain, Media, MediaHandle, FaceBook, Twitter, Instagram, Img, SectionContent} from "../Section4/style";
import img from "../../assests/girl1.jpg";
import img1 from "../../assests/girl2.jpg";
import img2 from "../../assests/man1.jpg"
import img3 from "../../assests/girl3.jpg";
import pics from "../../assests/nev.png"
// import { ContentHead } from "../Section5/style";
function Section5(){
    return (
        <SectionContain>
            <SectionWrapper>
               <Section>
                   <SectionContent>
                    <Content>
                        <Content1>
                            <ImgDiv><Img src={pics}/></ImgDiv>
                            <SectionP>Lorem ipsum dolor sit amet consectetur 
                                    umquam laborum laudantium expedita vitae voluptas fuga nam suscipit sit tempora</SectionP>
                                <SectionDiv>
                                    <SubInput/>
                                </SectionDiv>
                        </Content1>
                    </Content>
                     
                    <Content>

                    <Content2>
                           <ContentHead>Important Links</ContentHead>
                           <UlHolder>
                           <SectionUl>
                               <SectionLi>Adminssions</SectionLi>
                               <SectionLi>Adminssions</SectionLi>
                               <SectionLi>Adminssions</SectionLi>
                               <SectionLi>Adminssions</SectionLi>
                           </SectionUl>
                           <SectionUl>
                               <SectionLi>Adminssions</SectionLi>
                               <SectionLi>Adminssions</SectionLi>
                               <SectionLi>Adminssions</SectionLi>
                               <SectionLi>Adminssions</SectionLi>
                           </SectionUl>
                           </UlHolder>
                       </Content2>
                           
                          
                    </Content>

                    <Content>
                    <Content3>
                           <ContentHead>Contact Us</ContentHead>
                           <Sections>
                                <SectionLine>
                                    <Envelope/> <SectionLi>ifennamonanu70@gmail.com</SectionLi>
                                </SectionLine>
                                <SectionLine>
                                    <Envelope/> <SectionLi>ifennamonanu70@gmail.com</SectionLi>
                                </SectionLine>
                                <SectionLine>
                                    <Envelope/> <SectionLi>ifennamonanu70@gmail.com</SectionLi>
                                </SectionLine>
                           </Sections>
                         
                       </Content3>  
                        
                    </Content>  
                      
                   </SectionContent>
               </Section>
                
            </SectionWrapper>
        </SectionContain>
    )
}

export default Section5;