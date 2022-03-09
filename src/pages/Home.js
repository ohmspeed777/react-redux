import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonToolbar, Input, InputGroup, MaskedInput } from 'rsuite';

import {
  increment,
  selectCounter,
  decrement,
  incrementByAmount,
} from '../redux/slices/counterSlice';


const Home = () => {
  const counter = useSelector(selectCounter);
  const dispatch = useDispatch();

  const [number, setNumber] = useState(0);

  



  return (
    <div style={{ margin: '0 auto' }}>
      <div style={{ fontSize: '20rem' }}>{counter}</div>
      <Input type="number" value={number} onChange={(e) => setNumber(+e)} />
      {/* <input
        type="number"
        name="number"
        value={number}
        onChange={(e) => setNumber(+e.target.value)}
      /> */}
      <ButtonToolbar>
        <Button appearance="default" onClick={() => dispatch(increment())}>
          increment
        </Button>
        <Button appearance="primary" onClick={() => dispatch(decrement())}>
          decrement
        </Button>
        <Button
          appearance="ghost"
          onClick={() => dispatch(incrementByAmount(10))}
        >
          incrementByAmount
        </Button>
      </ButtonToolbar>
    </div>
  );
};

export default Home;
