import React from 'react';
import About from './About';
import Banner from './Banner';
import Service from './Service';
import Team from './Team';

// https://i.ibb.co/jvW3F4R/parts.jpg
// https://i.ibb.co/J3jzrh0/person.jpg

const Home = () => {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <Banner />
      <About />
      <Service/>
      <Team />
    </div>
  );
};

export default Home;