import React from 'react';
import styled from 'react-emotion';
import imgDO from '../images/do.png';
import imgGB from '../images/gatsby.png';
import imgGH from '../images/github.png';
import imgTW from '../images/twilio.png';
import LogoImgs from './LogoImgs';

const Wrapper = styled.a`
  width: 100%;
  display: table;
  height: auto;
  margin: 5rem auto;
  ${tw('shadow-lg relative no-underline rounded-lg px-8 py-8 md:py-24 text-white')};
  background: #23262b;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
  }
`;

const Type = styled.div`
  display: table-cell;
  width: 30%;
  vertical-align: middle;
  ${tw('text-2xl lg:text-2xl font-serif text-white mb-6 tracking-wide')};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
  margin: 0.5rem;
  font-weight: bolder;
  text-align: center;
  letter-spacing: 0;
  margin: 0 auto 1rem auto;
`;

const Logos = styled.div`
  display: table-cell;
  width: 70%;
`;

const platinumSponsors = {
  DigitalOcean: imgDO,
  GitHub: imgGH,
  Twilio: imgTW,
};

const silverSponsors = {
  Gatsby: imgGB,
  Netlify: imgDO,
};

const Sponsor = () => (
  <React.Fragment>
    <Wrapper>
      <Type>PLATINUM</Type>
      <Logos>
        <LogoImgs sponsors={platinumSponsors} />
      </Logos>
    </Wrapper>
    <Wrapper>
      <Type>SILVER</Type>
      <Logos>
        <LogoImgs sponsors={silverSponsors} />
      </Logos>
    </Wrapper>
  </React.Fragment>
);

export default Sponsor;
