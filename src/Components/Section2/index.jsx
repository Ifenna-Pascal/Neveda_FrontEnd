import {Section, SectionContainer, SectionListing, ListItem, SectionP, SectionContent,Img, SectionH1, SectionWrapper, Content1, Content2} from "../GeneralStyle";
import img from "../../assests/student.png";
import {IContent1} from "./style";
import Slide from "react-reveal/Slide"
function Section1(){
    return(
        <SectionContainer height id="courses">
            <SectionWrapper>
                <Section>
                    <SectionContent Start>
                        <Content1>
                            
                            <SectionH1>Our Mission and Vission</SectionH1>
                                <SectionP>Lorem ipsum dolor sit amet consectetur 
                                    recusandae voluptatem rerum totam nobis aut adipisci tenetur ipsum! Tenetur numquam laborum laudantium expedita vitae voluptas fuga nam suscipit sit tempora.</SectionP>
                                
                                <SectionListing>
                                    <Slide right duration={500}><ListItem>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</ListItem></Slide>
                    
                                    <Slide left duration={1000}><ListItem>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</ListItem></Slide>
                                    <Slide right duration={1300}><ListItem>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</ListItem></Slide>
                                    <Slide left duration={1500}><ListItem>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</ListItem></Slide>
                                    <Slide right duration={1700}><ListItem>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</ListItem></Slide>
                                </SectionListing>
                            
                                
                                
                                
                        </Content1>
                        <Content2>
                            <Img src={img}/>
                        </Content2>
                    </SectionContent>
                    
                </Section>
            </SectionWrapper>
        </SectionContainer>
    )

}

export default Section1;