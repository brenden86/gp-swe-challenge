import React from 'react';
import './ArticleBlocksColumn.scss';

export default function ArticleBlocksColumn(props) {
  return (
    <main className='article-blocks-column'>
      {props.children}
    </main>
  )
}
