import Button from './Button';
import './Section.css';

const Section = () => {
  const handleClick = () => {
    console.log(
      'This click is coming from the Button in the Section component'
    );
  };
  return (
    <section className='section'>
      <h3>This is a section</h3>
      <Button onClick={handleClick} text='click me' />
    </section>
  );
};

export default Section;
