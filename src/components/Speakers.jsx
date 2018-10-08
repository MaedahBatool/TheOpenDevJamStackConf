import React from 'react';
import styled from 'react-emotion';
import speakerAA from '../images/ahmadawais.jpg';
import speakerAI from '../images/asharirfan.jpg';
import speakerGF from '../images/gift.png';
import speakerMB from '../images/maedahbatool.jpg';
import CardSpeaker from './CardSpeaker';

const ProjectsWrapper = styled.div`
  ${tw('flex flex-wrap justify-between mt-8')};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const Speakers = () => (
  <React.Fragment>
    <ProjectsWrapper>
      <CardSpeaker img={speakerAA} title="Ahmad Awais" link="https://twitter.com/MrAhmadAwais" bg="#6b1be0">
        🎩 Full-time #OpenSourcerer 🥑 JavaScript Dev Advocate 👓 WordPress Core Dev 📣 TEDx Speaker ⚛️ JS/DevOps fanboy
        ❯ ✍️ Featured/published author at CSS-Tricks, Tuts+, SmashingMag, cracks silly jokes 🤣. Ahmad spends over 50%
        of his time building FOSS (Free & Open Source Software) used by over 94,700 developers and half a millions
        sites. 🙌 WordPress Community Evangelist 🎯 Ahmad's clients include Google, MongoDB, Intel, Audi, etc.
      </CardSpeaker>
      <CardSpeaker img={speakerMB} title="Maedah Batool" link="https://twitter.com/MaedahBatool" bg="#4428C1">
        🎩 #OpenSourceress ⓦ WordPress Core Contributor 👩‍💻 Creative/Product Manager @TheWPCouple 💬 Maintiner of
        #GirlsWhoCode 👧 #ReactJSLadies local meetup chapters. Content Strategist. ✍️ Featured/published author at
        TorqueMag, Tuts+, SitePoint, etc. ⚡ She is also one of the Marketing Representative at offical Make
        #WordPressMarketingTeam.
      </CardSpeaker>
      <CardSpeaker img={speakerAI} title="Ashar Irfan" link="https://twitter.com/MrAsharIrfan" bg="#1187e6">
        😎 Lead Developer @WPWhiteSecurity building WordPress Security Audit Log plugin with by 70,000+ userbase 💻
        Computer Scientist 🌍 Web Developer ⚡️ WordPress Core Contributor ✍️ Wannabe writer @WPC 📺 TV Seasons
        Fanatic.
      </CardSpeaker>
      <CardSpeaker img={speakerGF} title="Surprize Quiz/Gifts" link="https://twitter.com/MrAhmadAwais" bg="#364349">
        Industry-focused training to elevate your skills. Networking, collaboration, surprize quiz with gifts and giving
        back to the community.
      </CardSpeaker>
    </ProjectsWrapper>
  </React.Fragment>
);

export default Speakers;
