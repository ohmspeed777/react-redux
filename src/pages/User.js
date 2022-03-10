import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser, fetchUsers } from '../redux/slices/userSlice';
import { useForm } from 'react-hook-form';

const User = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  console.log(watch('name'));

  const onSubmit = (data) => {
    console.log(data);
    dispatch(createUser(data));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name', { required: true })} />
        <input {...register('paragraphs')} />
        <input {...register('image')} />
        <input {...register('email')} />
        {errors.name && <span>This field is required</span>}
        <button>submit</button>
      </form>
    </div>
  );
};

export default User;
