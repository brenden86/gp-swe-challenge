import React from 'react';
import './PageTitle.scss';

export default function PageTitle({ text }) {
  return (
    <div className="page-title">
      <h1>{text}</h1>
    </div>
  )
}
