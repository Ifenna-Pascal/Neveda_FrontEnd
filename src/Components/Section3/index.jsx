import { SectionContain, SectionH1, SectionBody, SectionBodyContent, SectionText, SectionIcon, SectionNum, Icon1,Icon2, Icon3, Icon4, SectionS, SectionP, SectionHeading} from "./style";
import {SectionWrapper, Hr} from "../GeneralStyle";

function Section3(){
    return (
        <SectionContain id="events">
            <SectionWrapper>
                <SectionS>
                    <SectionHeading>
                        <SectionH1>Our Achievements</SectionH1>
                        <SectionP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, dolorum ullam. Consectetur, deserunt. Dolor quibusdam accusamus quia praesentium, nulla perferendis.</SectionP>
                    </SectionHeading>
                    <SectionBody>
                        <SectionBodyContent>
                            <SectionIcon><Icon1/></SectionIcon>
                            <SectionText>Total Courses</SectionText>
                            <SectionNum>50K+</SectionNum>
                        </SectionBodyContent>
                        <SectionBodyContent>
                            <SectionIcon><Icon2/></SectionIcon>
                            <SectionText>Total Courses</SectionText>
                            <SectionNum>50K+</SectionNum>
                        </SectionBodyContent>
                        <SectionBodyContent>
                            <SectionIcon><Icon3/></SectionIcon>
                            <SectionText>Total Courses</SectionText>
                            <SectionNum>50K+</SectionNum>
                        </SectionBodyContent>
                        <SectionBodyContent>
                            <SectionIcon><Icon4/></SectionIcon>
                            <SectionText>Total Courses</SectionText>
                            <SectionNum>50K+</SectionNum>
                        </SectionBodyContent>
                    </SectionBody>
                </SectionS>
            </SectionWrapper>
        </SectionContain>
    )
}

export default Section3