import React from 'react';
import './Sidebar.scss';

export default function Sidebar(props) {
  return (
    <div className='sidebar'>
      {props.children}
      
    </div>
  )
}
