import { useState } from 'react';
import Button from './Button';
import './Footer.css';

const Footer = () => {
  const [bgColor, setBgColor] = useState('antiquewhite');

  const handleClick = () => {
    console.log('This click is from the Button component in the footer');
  };

  const changeBackGroundColor = () => {
    setBgColor(bgColor === 'antiquewhite' ? 'blue' : 'antiquewhite');
  };

  return (
    <footer className='footer' style={{ backgroundColor: bgColor }}>
      <p>This is a footer</p>
      <Button onClick={handleClick} text='click me' />
      <Button
        onClick={changeBackGroundColor}
        text='change background colour of footer'
      />
    </footer>
  );
};

export default Footer;
