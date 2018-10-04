/* global tw */
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'react-emotion';

const Wrapper = styled.a`
  width: 100%;
  display: table;
  height: auto;
  ${tw('shadow-lg relative no-underline rounded-lg px-8 py-8 md:py-24 text-white')};
  background: ${props => props.bg};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
  }
`;

const Text = styled.div`
  ${tw('opacity-75 font-sans text-sm md:text-base')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

const Title = styled.div`
  ${tw('text-white uppercase text-2xl md:text-3xl xl:text-4xl tracking-wide font-sans pt-8')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

const Img = styled.img`
  ${tw('rounded-full shadow-lg h-full')};
  display: table;
  width: 100px;
  height: 100px;
  margin: -9rem auto 2rem auto;
`;

const ProjectSponsor = ({ title, link, children, bg, img }) => (
  <Wrapper href={link} target="_blank" rel="noopener noreferrer" bg={bg}>
    <Img src={img} />
    <Title>{title}</Title>
    <Text>{children}</Text>
  </Wrapper>
);

export default ProjectSponsor;

ProjectSponsor.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  bg: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
