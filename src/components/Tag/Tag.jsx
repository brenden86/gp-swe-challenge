import React from 'react';
import './Tag.scss';

export default function Tag({ tag, setSelectedTags }) {

  // when clicking on an article tag, set selected tags
  // to only this tag
  function handleClick() {
    setSelectedTags([tag.tid])
  }

  return (
    <button className="tag" onClick={handleClick}>
      {tag.name}
    </button>
  )
}
