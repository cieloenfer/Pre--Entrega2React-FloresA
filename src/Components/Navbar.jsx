import React from 'react'
import { Menu ,MenuButton, MenuList, MenuItem } from '@chakra-ui/react';


const ComponenteNavbar = () => {
  return (
    <div>
    <h3>Iuris Help</h3>
    <CartWidget/>
   
      <Menu>
  <MenuButton>Servicios Legales</MenuButton>
  <MenuList>
    <MenuItem>Mediacion</MenuItem>
    <MenuItem>Asesorias Copropiedad y convivencia</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
    </div>
  );
};

export default ComponenteNavbar