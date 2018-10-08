import React from 'react';
import styled from 'react-emotion';

const FooterWrapper = styled.footer`
  ${tw('text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg')};
  margin-right: auto;
  margin-left: auto;
  max-width: 960px;
  padding-right: 10px;
  padding-left: 10px;
`;

const Footer = styled.footer`
  ${tw('text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg')};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;

const Footer = () => (
  <React.Fragment>
    <FooterWrapper>
      <Footer>
        &copy; 2018 All rights reserved. Say <a href="https://twitter.com/MrAhmadAwais">👋 on twitter</a> or find me on
        other platforms: <a href="https://github.com/ahmadawais/">GitHub</a> &{' '}
        <a href="https://ahmadawais.com/contact/">Contact Form</a>
      </Footer>
    </FooterWrapper>
  </React.Fragment>
);

export default Footer;
