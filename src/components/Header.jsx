import { useState } from 'react';
import Button from './Button';
import './Header.css';

const Header = () => {
  const [bgColor, setBgColor] = useState('antiquewhite');

  const handleClick = () => {
    console.log('This click is from the button Header component ');
  };

  const changeBackGroundColor = () => {
    setBgColor(bgColor === 'antiquewhite' ? 'blue' : 'antiquewhite');
  };

  return (
    <header className='header' style={{ backgroundColor: bgColor }}>
      <h1>This is the header</h1>
      <Button onClick={handleClick} text='click me' />
      <Button
        onClick={changeBackGroundColor}
        text='change backround colour of header'
      />
    </header>
  );
};

export default Header;
