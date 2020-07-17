import React, { useState, useEffect } from 'react';

import MenuContext from './'

const MenuProvider = ({children}) => {
  const [menu, setmenu] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      try {
        await fetch('https://demo6507195.mockable.io/burger-queen')
        .then((res) => res.json())
        .then(data => setmenu(data));
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);
  
  return (
    <MenuContext.Provider value={menu}>
    {children}
    </MenuContext.Provider>
    )
  }
  
  export default MenuProvider; 