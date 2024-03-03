import React from 'react';
import './ArticleTagsFilter.scss';

export default function ArticleTagsFilter() {
  return (
    <section className='article-filter'>

      <div className="filter-title">
        <h2>Categories</h2>
      </div>

      <div className="filter-controls">

        <label className="filter-control">
          <input type="checkbox" />
          Cover Crops (5)
        </label>
        <label className="filter-control">
          <input type="checkbox" />
          Cover Crops (5)
        </label>
        <label className="filter-control">
          <input type="checkbox" />
          Cover Crops (5)
        </label>
        <label className="filter-control">
          <input type="checkbox" />
          Cover Crops (5)
        </label>

      </div>

    </section>
  )
}
