import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/slices/postSlice';

const Post = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  const fetch = async () => {
    dispatch(fetchPosts());
  };

  useEffect(() => {
    fetch();
  }, []);

  const render = () => {
    if (posts.state === 'loading') {
      return null;
    }

    if (posts.state === 'error') {
      return 'error';
    }

    return posts.value.map((el) => (
      <React.Fragment key={el.id}>
        <h1>{el.userId}</h1>
        <h2>{el.id}</h2>
        <h3>{el.title}</h3>
        <h4>{el.body}</h4>
      </React.Fragment>
    ));
  };

  return (
    <div>
      {render()}
      {/* <h1>{posts.value.userId}</h1>
      <h2>{posts.value.id}</h2>
      <h3>{posts.value.title}</h3>
      <h4>{posts.value.body}</h4> */}
    </div>
  );
};

export default Post;
