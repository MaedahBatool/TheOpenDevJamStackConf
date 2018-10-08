import React from 'react';
import styled from 'react-emotion';
import avatar from '../images/avatar.jpg';

const AboutHero = styled.div`
  ${tw('flex flex-col lg:flex-row items-center mt-8')};
`;

const Avatar = styled.img`
  ${tw('rounded-full w-32 xl:w-48 shadow-lg h-full')};
`;

const AboutSub = styled.span`
  ${tw('text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl')};
`;

const AboutDesc = styled.p`
  ${tw('text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12')};
  font-family: 'Open Sans';
`;
const About = () => (
  <React.Fragment>
    <AboutHero>
      <Avatar src={avatar} alt="John Doe" />
      <AboutSub>
        Whether you're an absolute beginner, a developer, a content strategist, or a marketer—there's something for you
        at #TheOpenDevCon.
      </AboutSub>
    </AboutHero>
    <AboutDesc>
      #TheOpenDevCon is hosted to celebrate the 5th year of Hacktoberfest where developers will converge to show their
      support for open source. We are hosting this event in partnership with our incredible sponsors listed below.
      Refreshments are on us. Plus earn a limited edition T-shirt by contributing to open source.
    </AboutDesc>
    <AboutDesc>
      If you want to learn how to build modern, fast, and scalable portfolio websites using Gatsby & Netlify then yes
      this is the conference you should be attending in October. We have an incredible speaker lineup with
      talks/workshop about JAMstack.
    </AboutDesc>
  </React.Fragment>
);

export default About;
