import React, { Component } from 'react';

const IsAuthenticated = (WrappedComponent, AuthenticatedState) => () => {
  return (
    <div>{AuthenticatedState ? <WrappedComponent /> : <p>Please login</p>}</div>
  );
};

export default IsAuthenticated;
