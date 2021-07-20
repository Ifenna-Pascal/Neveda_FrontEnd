import {SectionH1,SectionS, SectionP, SectionHeading} from "../Section3/style";
import {SectionWrapper, SectionContainer, Hr} from "../GeneralStyle";
import {SectionImg, BodyContent,BodyH1, BodyP, SectionBodyContain, Contain, Media, MediaHandle, FaceBook, Twitter, Instagram, Img, SectionContent} from "./style";
import img from "../../assests/girl1.jpg";
import img1 from "../../assests/girl2.jpg";
import img2 from "../../assests/man1.jpg"
import img3 from "../../assests/girl3.jpg";
function Section3(){
    return (
        <SectionContainer height id="blog" >
            <SectionWrapper>
                <SectionS>
                    <SectionHeading top>
                        <SectionH1 black>Our Department Heads</SectionH1><Hr/>
                        <SectionP gray>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, dolorum ullam. Consectetur, deserunt. Dolor quibusdam accusamus quia praesentium, nulla perferendis.</SectionP>
                    </SectionHeading>
                </SectionS>
                    <SectionBodyContain body>
                        <Contain>
                        <SectionContent>
                            <SectionImg><Img src={img}/></SectionImg>
                            <BodyContent>
                                <BodyH1>Stella Moris</BodyH1>
                                <BodyP>Medicine & Laboratory</BodyP>
                                <Media>
                                    <MediaHandle><FaceBook/></MediaHandle>
                                    <MediaHandle><Twitter/></MediaHandle>
                                    <MediaHandle><Instagram/></MediaHandle>
                                </Media>    
                            </BodyContent>
                        </SectionContent>
                        <SectionContent>
                            <SectionImg><Img src={img2}/></SectionImg>
                            <BodyContent>
                                <BodyH1>Daniel Smith</BodyH1>
                                <BodyP>Chemilcal Engineering</BodyP>
                                <Media>
                                    <MediaHandle><FaceBook/></MediaHandle>
                                    <MediaHandle><Twitter/></MediaHandle>
                                    <MediaHandle><Instagram/></MediaHandle>
                                </Media>    
                            </BodyContent>
                        </SectionContent>
                        <SectionContent>
                            <SectionImg><Img src={img1}/></SectionImg>
                            <BodyContent>
                                <BodyH1>Theresa Ann</BodyH1>
                                <BodyP>Computer Technologist</BodyP>
                                <Media>
                                    <MediaHandle><FaceBook/></MediaHandle>
                                    <MediaHandle><Twitter/></MediaHandle>
                                    <MediaHandle><Instagram/></MediaHandle>
                                </Media>    
                            </BodyContent>
                        </SectionContent>
                        <SectionContent>
                            <SectionImg><Img src={img3}/></SectionImg>
                            <BodyContent>
                                <BodyH1>Sandra Melvin</BodyH1>
                                <BodyP>Biochemical Technology</BodyP>
                                <Media>
                                    <MediaHandle><FaceBook/></MediaHandle>
                                    <MediaHandle><Twitter/></MediaHandle>
                                    <MediaHandle><Instagram/></MediaHandle>
                                </Media>    
                            </BodyContent>
                        </SectionContent>   
                        </Contain>
                        
                    </SectionBodyContain>
                
            </SectionWrapper>
        </SectionContainer>
    )
}

export default Section3