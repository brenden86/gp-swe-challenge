import React from 'react';
import './AgronomyPage.scss';

// component imports
import PageTitle from '../PageTitle/PageTitle';
import ArticleBlocksColumn from '../ArticleBlocksColumn/ArticleBlocksColumn';
import ArticleBlock from '../ArticleBlock/ArticleBlock';
import Sidebar from '../Sidebar/Sidebar';
import ArticleTagsFilter from '../ArticleTagsFilter/ArticleTagsFilter';

export default function AgronomyPage() {
  return (
    <div className='agronomy-page-container debug'>
      
      <PageTitle text={"Great Plains Agronomy"}/>

      <div className="agronomy-content-wrapper">

        <ArticleBlocksColumn>
          
          <ArticleBlock/>
          <ArticleBlock/>
          <ArticleBlock/>
          <ArticleBlock/>

        </ArticleBlocksColumn>

        <Sidebar>

          <ArticleTagsFilter/>

        </Sidebar>

      </div>

    </div>
  )
}
