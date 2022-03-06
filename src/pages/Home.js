import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'rsuite';
import Card from '../components/Card';

const Home = () => {
  // const [value, setValue] = useState('#333');
  const [number, setNumber] = useState(1);
  const [oddNumber, setOddNumber] = useState(0);
  // let value = '#333';
  // console.log(value);
  // useEffect(() => {
  //   console.log('Re render');

  //   return () => {
  //     console.log('Clean up');
  //   };
  // });

  // useEffect(() => {
    // console.log('First render');
  // });

  return (
    <div>
      <h1>{number}</h1>
      {/* <Card color={value.color} /> */}
      {/* <Card color={'#333'} /> */}
      {/* <Card color={value} /> */}
      {/* <Button onClick={(e) => setValue('rgb(162 30 230)')}>Click me</Button> */}
      <Button onClick={(e) => setNumber(number + 1)}>Increase</Button>
      <Button onClick={(e) => setNumber(number - 1)}>Decrease</Button>
      <Button>
        <Link to={'/2'}>Two page</Link>
      </Button>
      {/* <Button onClick={(e) => (value = 'rgb(162 30 230)')}>Click me</Button> */}
    </div>
  );
};

export default Home;
