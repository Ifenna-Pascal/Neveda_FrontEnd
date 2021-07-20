import {SectionBtn, SectionContainer, SectionContent,SectionH1,SectionWrapper,SectionP} from "./style";
function Hero(){
    return (
        <SectionContainer id="home">
            <SectionWrapper>
                <SectionContent>
                    <SectionH1>About Us</SectionH1>
                    <SectionP>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur rerum amet ipsum voluptas vitae odio quas quod, placeat corporis eos.</SectionP>
                    <SectionBtn>Contact us</SectionBtn>
                </SectionContent>
            </SectionWrapper>
        </SectionContainer>
    )
}
export default Hero;