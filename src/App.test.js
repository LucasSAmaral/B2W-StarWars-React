import React from 'react';
import { shallow } from 'enzyme';
import AboutMe from './pages/AboutMe';
import AboutTheApp from './pages/AboutTheApp';

it('renders the About Me page main title', ()=>{
  const wrapper = shallow(<AboutMe />);
  const title = <h1 className="about__title">About Me</h1>;
  expect(wrapper.contains(title)).toEqual(true);
});

it('renders the About The App page main title', ()=>{
  const wrapper = shallow(<AboutTheApp />);
  const title = <h1 className="about__title">About The App</h1>;
  expect(wrapper.contains(title)).toEqual(true);
});