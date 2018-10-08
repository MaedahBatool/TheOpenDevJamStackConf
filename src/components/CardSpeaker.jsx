/* global tw */
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'react-emotion';

const Wrapper = styled.a`
  width: 100%;
  ${tw('shadow-lg relative no-underline rounded-lg px-8 py-8 md:py-24 text-white')};
  background: ${props => props.bg};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
  }
`;

const Title = styled.div`
  ${tw('text-5xl lg:text-6xl font-serif text-white mb-6 tracking-wide')};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
  margin: 0.5rem;
  font-weight: bolder;
  text-align: center;
  letter-spacing: 0;
  margin: 0 auto 1rem auto;
`;

const Img = styled.img`
  ${tw('rounded-full shadow-lg h-full')};
  display: table;
  width: 100px;
  height: 100px;
  margin: -9rem auto 2rem auto;
`;

const Text = styled.div`
  ${tw('font-sans text-sm md:text-base')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: 'Open Sans';
`;

const Follow = styled.a`
  ${tw(' font-sans text-sm md:text-base')};
  display: table;
  color: #fff;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: 'Open Sans';
  margin: 1rem auto 0;
  font-style: italic;
  text-decoration: none;
  box-shadow: inset 0 -0.7rem 0 #23262b;
  transition: 0.4s all ease-out;
  &:hover {
    box-shadow: inset 0 -1.5rem 0 #23262b;
  }
`;

const CardSpeaker = ({ title, link, children, bg, img }) => (
  <Wrapper href={link} target="_blank" rel="noopener noreferrer" bg={bg}>
    <Img src={img} />
    <Title>{title}</Title>
    <Text>{children}</Text>
    <Follow href={link}>Follow on Twitter →</Follow>
  </Wrapper>
);

export default CardSpeaker;

CardSpeaker.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  bg: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
