import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, fetchUser, updateUser } from '../redux/slices/userSlice';
import { useForm } from 'react-hook-form';

const UserUpdate = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);

  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    dispatch(fetchUser('add4c472-84be-4e39-b183-861525db2730'));
  }, []);

  useEffect(() => {
    if (user.select.id) {
      for (const [key, value] of Object.entries(user.select)) {
        setValue(key, value);
      }
    }
  }, [user.select]);

  const onSubmit = (data) => {
    dispatch(
      updateUser({
        id: 'add4c472-84be-4e39-b183-861525db2730',
        body: data,
      })
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name', { required: true })} />
        <input {...register('paragraphs')} />
        <input {...register('image')} />
        <input {...register('email')} />

        <button>submit</button>
      </form>
    </div>
  );
};

export default UserUpdate;
