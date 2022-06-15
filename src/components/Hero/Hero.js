import React from 'react';

import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey there,
        </SectionTitle>
        <SectionText>
          Hey there, This is Rakibul Islam. I am a Full-stack web developer  who also works on Blockchain and mobile apps development.
        </SectionText>



        <Button onClick={(e) => {
          e.preventDefault();
          window.location.href = "https://drive.google.com/file/d/11PddY_2FsoVCHJGs3g2r9IVkCER1YwIN/view?usp=sharing";
        }}>My Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
