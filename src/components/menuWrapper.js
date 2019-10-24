// menuWrapper.js
import React from 'react';

import Menu from './menu';

const MenuWrapper = ({ children }) => (
  <>
    {children}
    <Menu />
  </>
);

export default MenuWrapper;