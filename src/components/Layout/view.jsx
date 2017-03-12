import React from 'react';
import Navbar from '~/components/Navbar';

let View = ({children}) => (
  <main>
    <Navbar />
    {children}
  </main>
);

export default View;
