// MailWidgetWrapper.js
import React from 'react';

import MenuToggle from './menuToggle';

const MenuToggleWrapper = ({ children }) => (
  <>
    {children}
    <MenuToggle />
  </>
);

export default MenuToggleWrapper;