import React from 'react';
import './SelectedTags.scss';
export default function SelectedTags({ tags, selectedTags }) {
  
  const tagNames = [];

  for(const tag in tags) {
    if(selectedTags.includes(tag)) {
      tagNames.push(...Object.keys(tags[tag]));
    }
  }

  const tagNames = [];

  for(const tag in tags) {
    if(selectedTags.includes(tag)) {
      tagNames.push(...Object.keys(tags[tag]));
    }
  }

  return (
    <div className='selected-tags'>
      {selectedTags.length > 0 &&
        <h2>Current search terms:&nbsp;
          <span>{tagNames.join(', ')}</span>
        </h2>
      }
    </div>
  )
}
