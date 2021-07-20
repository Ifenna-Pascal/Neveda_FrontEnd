import {Section, SectionContainer, SectionBtns, SectionP, SectionContent,Img, SectionH1, SectionWrapper, Content1, Content2} from "../GeneralStyle";
import img from "../../assests/stud.png";
import Slide from "react-reveal/Slide";
function Section1(){
    return(
        <SectionContainer bg id="about">
            <SectionWrapper>
                <Section>
                    <SectionContent>
                
                        <Content1>
                        <Slide left>
                                <SectionH1>About Our Institution</SectionH1>
                                <SectionP>Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Odit qui quos iure dolores, ea nesciunt quod molestiae accusantium veniam recusandae voluptatem rerum totam nobis aut adipisci tenetur ipsum! Tenetur numquam laborum laudantium expedita vitae voluptas fuga nam suscipit sit tempora.</SectionP>
                                <SectionP>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo doloribus fugit perferendis non dignissimos harum nesciunt
                             impedit mollitia voluptatem id.</SectionP>
                                <SectionBtns>Learn More </SectionBtns>
                                </Slide>
                        </Content1>
                        
                       
                       <Content2>
                       {/* <Slide right> */}
                            <Img src={img}/>
                            {/* </Slide> */}
                        </Content2>
                       
                        
                    </SectionContent>
                    
                </Section>
            </SectionWrapper>
        </SectionContainer>
    )

}

export default Section1;