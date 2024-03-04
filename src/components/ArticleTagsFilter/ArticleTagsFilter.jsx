import React from 'react';
import './ArticleTagsFilter.scss';

export default function ArticleTagsFilter({ tags, selectedTags, setSelectedTags }) {

  let tagIDs = Object.keys(tags)

  // add or remove tag from selected tags based on input checked state
  function handleChange(e) {

    let tid = e.target.getAttribute('data-tid');

    // add tag to filter if checked
    if(e.target.checked) {
      setSelectedTags(tags => [...tags, tid])
    } else if(selectedTags.includes(e.target.getAttribute('data-tid'))) {
      // if un-checking tag, remove from selected tags
      let currentTags = selectedTags;
      let removeIndex = currentTags.indexOf(tid);
      setSelectedTags([...currentTags.slice(0,removeIndex), ...currentTags.slice(removeIndex+1, currentTags.length)]);
    }
  }

  return (
    <section className='article-filter'>

      <div className="filter-title">
        <h2>Categories</h2>
      </div>

      <div className="filter-controls">

        {tagIDs.map(tid => (
          <label className="filter-control" key={tid}>
            <input
              type="checkbox"
              data-tid={tid}
              onChange={handleChange}
              checked={selectedTags.includes(tid) && true}
            />

            {/* custom checkbox */}
            <div className="checkbox">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-check" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
              </svg>
            </div>

            {Object.keys(tags[tid])[0]} ({tags[tid][Object.keys(tags[tid])[0]]})
          </label>
        ))}

      </div>

    </section>
  )
}
