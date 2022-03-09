import React, { useEffect, useState } from 'react';
import { Input } from 'rsuite';

const Search = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    const time = setTimeout(() => {
      console.log('render');
    }, 1000);

    return () => {
      clearTimeout(time);
    };
  });

  // useEffect(() => {
  //   console.log('render');

  //   return () => {
  //     console.log('clean up');
  //   };
  // });

  return (
    <div>
      <Input
        type="text"
        value={text ?? ''}
        onChange={(value) => setText(value)}
      />
    </div>
  );
};

export default Search;
