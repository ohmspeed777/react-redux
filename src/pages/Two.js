import React from 'react';
import { Button } from 'rsuite';
import Paragraph from '../components/Paragraph';

const Two = () => {
  return (
    <div>
      <Paragraph/>
      <Paragraph color="#2596be"/>
      {/* <Paragraph color="#e28743"/> */}
      <Paragraph color='#e28743'><Button>Test</Button></Paragraph>
    </div>
  );
};

export default Two;
