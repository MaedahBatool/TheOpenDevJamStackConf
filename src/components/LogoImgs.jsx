import PropTypes from 'prop-types';
import React from 'react';
import styled from 'react-emotion';

const Img = styled.img`
  display: inline-block;
  width: 100%;
  max-width: 200px;
`;

const LogoImgs = ({ sponsors }) => (
  <React.Fragment>
    {Object.keys(sponsors).map(i => (
      <Img src={sponsors[i]} title={i} key={`sp-${i}`} />
    ))}
  </React.Fragment>
);

export default LogoImgs;

LogoImgs.propTypes = {
  sponsors: PropTypes.object.isRequired,
};
