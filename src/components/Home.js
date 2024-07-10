import React from 'react';
import Notes from './Notes';
import NotAuth from './NotAuth';

const Home = () => {
  const token = localStorage.getItem('token');

  return (
    <>
    {token ? <Notes /> : <NotAuth />}
  </>
  );
};

export default Home;
