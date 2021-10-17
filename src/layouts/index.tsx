import React from 'react';

import Main from './main';
import SideBar from './sidebar';

const Layout: React.FC = () => {
  return (
    <div className="aldenn container gutter-top">
      <div className="wrap-sidebar sticky-parent">
        <SideBar />
      </div>
      <div className="wrap-main">
        <Main />
      </div>
    </div>
  );
};

export default Layout;
