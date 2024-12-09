import React from 'react'
import Header from './Header';
import { ChildrenNodes } from '../../types';
import Sidebar from './Sidebar';

export default function MainLayout({children} : ChildrenNodes) {
  return (
    <React.Fragment>
      

      <div id="layout-wrapper">
        <Header  />
        <Sidebar
         
        />
        <div className="main-content">{children}</div>
      
      </div>
     
    </React.Fragment>
  );
}

