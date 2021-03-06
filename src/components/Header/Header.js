import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillFacebook } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
          <span style={{ marginLeft: 10, marginTop: 7, fontSize: 20 }}>Rakibul Islam</span>
        </a>
        {/* <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
          <img src="/logo.svg" height={40} width={40} /> <span style={{ marginLeft: 10, marginTop: 7, fontSize: 20 }} >Rakibul Islam</span>
        </a> */}
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills">
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <a target="_blank" href="https://medium.com/@rakibulislam202019">
          <NavLink >Blog</NavLink>
        </a>
      </li>
    </Div2>
    <Div3>
      <SocialIcons target="_blank" href="https://github.com/Rakibul71">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons target="_blank" href="https://www.linkedin.com/in/rakibul-islam71?original_referer=https%3A%2F%2Fwww.linkedin.com%2Fin%2Frakibul-islam71">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons target="_blank" href="https://www.facebook.com/photo/?fbid=2204523729862573&set=a.1961222667526015">
        <AiFillFacebook size="3rem" />
      </SocialIcons>
      <SocialIcons target="_blank" href="#">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
