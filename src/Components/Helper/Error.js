import React from 'react';

const Error = ({ error }) => {
  if (!error) return null;
  return <p>{error}</p>;
};

export default Error;
