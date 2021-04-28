import React, { useState } from 'react';
import { Menu } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar: React.FC = () => {
  const { asPath } = useRouter();
  const [currentTab, setCurrentTab] = useState(asPath.substring(1));

  const menuItems: Array<{ name: string; path: string }> = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Heroes',
      path: '/heroes',
    },
    {
      name: 'Planets',
      path: '/planets',
    },
  ];

  return (
    <Menu
      onClick={(e: any) => {
        setCurrentTab(e.key);
      }}
      theme='light'
      selectedKeys={[currentTab]}
      mode='horizontal'
    >
      {menuItems.map(({ name, path }) => (
        <Menu.Item key={name.toLowerCase()}>
          <Link href={path}>
            <a href={path}>{name}</a>
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default Navbar;
