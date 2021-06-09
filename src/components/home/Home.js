import React, { Fragment } from 'react';
import Banner from './Banner';
import About from './About';
import Aims from './Aims';
import JudgeSlider from './Slider';

const Home = () => {
  return (
    <Fragment>
      <Banner />
      <About />
      <Aims />
      <JudgeSlider />
    </Fragment>
  );
};

export default Home;