import { SectionH1, SectionS, SectionP, SectionHeading} from "../Section3/style";
import {SectionWrapper, SectionContainer, Hr} from "../GeneralStyle";
import {BodyStar, BodyText, ContainContent, ContentBody, ContentHead,TextH1, Imgs,TextHead, TextP, ImgHolder} from "./style";
import {SectionImg, BodyContent,BodyH1, BodyP, SectionBodyContain, Contain, Media, MediaHandle, FaceBook, Twitter, Instagram, Img, SectionContent} from "../Section4/style";
import img from "../../assests/girl1.jpg";
import img1 from "../../assests/girl2.jpg";
import img2 from "../../assests/man1.jpg"
import img3 from "../../assests/girl3.jpg";
function Section5(){
    return (
        <SectionContainer height bg id="contact">
            <SectionWrapper>
                <SectionS>
                    <SectionHeading top>
                        <SectionH1 black>What Our Students Say</SectionH1><Hr/>
                        <SectionP gray>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo autem, consequatur inventore accusamus necessitatibus praesentium. Consequuntur, dolorum ullam. </SectionP>
                    </SectionHeading>
                </SectionS>
                <SectionBodyContain max>
                    <Contain>
                        <ContainContent>
                            <ContentHead>
                                <ImgHolder><Imgs src={img}/></ImgHolder>
                                <TextHead>
                                    <TextH1>Perry Stone</TextH1>
                                    <TextP>Student Developer</TextP>
                                </TextHead>
                            </ContentHead>
                            <ContentBody>
                                <BodyStar>******</BodyStar>
                                <BodyText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam at atque  </BodyText>
                            </ContentBody>
                        </ContainContent>
                        <ContainContent>
                            <ContentHead>
                                <ImgHolder><Imgs src={img3}/></ImgHolder>
                                <TextHead>
                                    <TextH1>Perry Stone</TextH1>
                                    <TextP>Student Developer</TextP>
                                </TextHead>
                            </ContentHead>
                            <ContentBody>
                                <BodyStar>******</BodyStar>
                                <BodyText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam   sit amet consectetur adipisicing elit. Nemo, et.</BodyText>
                            </ContentBody>
                        </ContainContent>
                        <ContainContent>
                            <ContentHead>
                                <ImgHolder><Imgs src={img2}/></ImgHolder>
                                <TextHead>
                                    <TextH1>Perry Stone</TextH1>
                                    <TextP>Student Developer</TextP>
                                </TextHead>
                            </ContentHead>
                            <ContentBody>
                                <BodyStar>******</BodyStar>
                                <BodyText>Lorem ipsum dolor sit amet consectetur adipisicing el r quam ducimus sint? Lorem ipsum  Nemo, et.</BodyText>
                            </ContentBody>
                        </ContainContent>
                    </Contain>
                </SectionBodyContain>
                
            </SectionWrapper>
        </SectionContainer>
    )
}

export default Section5;