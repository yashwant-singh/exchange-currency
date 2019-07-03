import React from 'react';
import { Menu, Input, Image } from 'semantic-ui-react';

const AppMenubar = () => (
  <Menu secondary>
    <Menu.Item>
      <Image src="" alt='Logo' size='small'/>
    </Menu.Item>
    <Menu.Item name='home' active={true}/>
    <Menu.Item name='messages' />
    <Menu.Item name='friends' />
    <Menu.Menu position='right'>
      <Menu.Item>
        <Input icon='search' placeholder='Search...' />
      </Menu.Item>
      <Menu.Item
        name='Login' 
      />
    </Menu.Menu>
    <Menu.Menu>
      <Menu.Item>
        <Image src="" alt='Logo' size='small'/>
      </Menu.Item>
    </Menu.Menu>
    <Menu.Item />
  </Menu>
);

export default AppMenubar;

