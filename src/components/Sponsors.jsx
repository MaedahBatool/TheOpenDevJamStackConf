import React from 'react';
import sponsorDO from '../images/digitalocean.jpg';
import CardSponsor from './CardSponsor';

const Sponsor = () => (
  <React.Fragment>
    <CardSponsor img={sponsorDO} title="DigitalOcean" link="https://twitter.com/MrAhmadAwais" bg="#23262B" />
    <CardSponsor img={sponsorDO} title="DigitalOcean" link="https://twitter.com/MrAhmadAwais" bg="#23262B" />
  </React.Fragment>
);

export default Sponsor;
