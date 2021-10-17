import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

import Footer from '@/layouts/footer';

interface IProps {
  children?: React.ReactNode | null;
}

interface IItem {
  label: string;
  path: string;
}

const Menu: IItem[] = [
  {
    label: 'About',
    path: '/about-me',
  },
  {
    label: 'Resume',
    path: '/resume',
  },
  // {
  //   label: 'Portfolio',
  //   path: '/portfolio',
  // },
  // {
  //   label: 'Blog',
  //   path: '/blog',
  // },
  {
    label: 'Contact',
    path: '/contact',
  },
];

const MainLayout: React.FC<IProps> = ({ children }) => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);

  const path = location.pathname;

  const toggleMenu = () => {
    setOpenMenu(prev => !prev);
  };

  const toggleBody = (open: boolean) => {
    if (open) {
      document.getElementsByTagName('body')[0].classList.add('open-menu');
    } else {
      document.getElementsByTagName('body')[0].classList.remove('open-menu');
    }
  };

  useEffect(() => {
    toggleBody(openMenu);
  }, [openMenu]);

  return (
    <>
      <div className="box shadow pb-0">
        {/* Menu */}
        <div className="circle-menu">
          <div
            onClick={toggleMenu}
            className={`hamburger ${openMenu ? 'is-active' : ''}`}
          >
            <div className="line" />
            <div className="line" />
            <div className="line" />
          </div>
        </div>
        <div className={`inner-menu js-menu ${openMenu ? 'is-active' : ''}`}>
          <ul className="nav">
            {Menu.map(item => {
              return (
                <li key={item.label} className="nav__item">
                  <Link
                    className={`${path === item.path ? 'active' : ''}`}
                    to={item.path}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
