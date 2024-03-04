import React from 'react';
import './ArticleTagsFilter.scss';

export default function ArticleTagsFilter({ tags }) {

  let tagIDs = Object.keys(tags)

  return (
    <section className='article-filter'>

      <div className="filter-title">
        <h2>Categories</h2>
      </div>

      <div className="filter-controls">

        
        {tagIDs.map(tid => (
          <label className="filter-control" key={tid}>
            <input type="checkbox" />
            {Object.keys(tags[tid])[0]} ({tags[tid][Object.keys(tags[tid])[0]]})
          </label>
        ))}

      </div>

    </section>
  )
}
