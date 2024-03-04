import React from 'react';
import './SelectedTags.scss';
export default function SelectedTags({ tags, selectedTags }) {

  const testTags = ['one', 'two', 'three'];

  return (
    <div className='selected-tags'>
      <h2>Current search term: {testTags.join(', ')}

      </h2>
    </div>
  )
}
