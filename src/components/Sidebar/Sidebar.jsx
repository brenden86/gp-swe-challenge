import React from 'react';
import './Sidebar.scss';

export default function Sidebar(props) {
  return (
    <aside className='sidebar'>

      {props.children}
      
    </aside>
  )
}
