import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { Link } from '../../styles/GlobalComponents';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Chat</LinkTitle>
          <LinkItem href="https://discord.com/invite/B3Wg4Wnc">Discord</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle target="_blank">Email</LinkTitle>
          <LinkItem target="_blank" href="rakibulislam202019@gmail.com">
            rakibulislam202019@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>&copy; 2022 <Link href="https://rakibulislam71.netlify.app/">Rakibul Islam</Link> . All rights reserved.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons target="_blank" href="https://github.com/Rakibul71">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons target="_blank" href="https://www.linkedin.com/in/rakibul-islam71?original_referer=https%3A%2F%2Fwww.linkedin.com%2Fin%2Frakibul-islam71">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="#">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
          <SocialIcons href="#">
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>

    </FooterWrapper>
  );
};

export default Footer;
