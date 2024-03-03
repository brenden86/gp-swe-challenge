import React from 'react';
import he from 'he'; // HTML entity decoding library
import './ArticleBlock.scss';

export default function ArticleBlock({ article }) {

  return (
    <article className='article-block'>

      <div className="block-content-wrapper">

        <div className="article-image">
          <img
            src={article.article_image?.values[0].images['500px_width_uri'] ?? '/src/assets/images/agronomy_placeholder.jpg'}
            alt={article.article_image?.values[0].alt}
          />
        </div>

        <div className="article-info">

          <div className="article-title">
            <h2>{he.decode(article.title)}</h2>
          </div>

          <div className="article-tags">
            {
              article.categorization.tags.values.map(tag => (
                <button className="tag" key={tag.id}>{tag.name}</button>
              ))
            }
          </div>

          <div className="article-summary">
            {he.decode(article.body.summary)}
          </div>

        </div>

        
      </div>

      <button>Read more</button>

    </article>
  )
}
