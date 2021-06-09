import React from 'react';
import { Container } from 'react-bootstrap';
import shamp from '../../dist/img/shamp.webp'

const Banner = () => {
  return (
    <section className="banner">
        <Container>
            <h2>Award of Excellence in Cooperative Health Insurance 2021</h2>
            <img src={shamp}></img>
        </Container>
        <span className="whiteShape"></span>
    </section>
  );
};

export default Banner;