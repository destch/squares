import React, { useState, createContext } from 'react';

export const PageContext = React.createContext(
  {page:1, term:""} // default value
);// Create cart context

export default PageContext