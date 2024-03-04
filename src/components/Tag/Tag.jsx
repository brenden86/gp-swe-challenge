import React from 'react';
import './Tag.scss';

export default function Tag({ name, onClick }) {
  return (
    <button className="tag">
      {name}
    </button>
  )
}
