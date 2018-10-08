import React from 'react';
import styled from 'react-emotion';

const HeroWrap = styled.div`
  ${tw('w-full xl:w-2/3')};
`;

const SmallTitle = styled.h3`
  ${tw('text-3xl lg:text-2xl font-serif text-white mb-6 tracking-wide')};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
  margin: 0 0 1rem;
  padding-left: 1rem;
  line-height: 0;
  color: #38c172;
`;

const BigTitle = styled.h1`
  ${tw('text-5xl lg:text-6xl font-serif text-white mb-6 tracking-wide')};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
  margin: 0.5rem;
`;

const Subtitle = styled.p`
  ${tw('text-2xl lg:text-4xl font-sans text-white mt-8 xxl:w-3/4')};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  font-size: 1.75rem !important;
  font-family: 'Open Sans';
`;

const Hero = () => (
  <HeroWrap>
    <SmallTitle>JAMstack</SmallTitle>
    <BigTitle>#TheOpenDevCon</BigTitle>
    <Subtitle>
      Learn JavaScript, reusable APIs, and static Markup. Build next-generation super fast static websites with Gatsby.
      Scale your website to millions of visitors with Netlify. And let's celebrate open-source on 5th edition of
      Hacktoberfest.
    </Subtitle>
  </HeroWrap>
);

export default Hero;
