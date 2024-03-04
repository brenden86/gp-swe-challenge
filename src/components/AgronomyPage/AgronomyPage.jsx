import React, {useState, useEffect} from 'react';
import './AgronomyPage.scss';

// components
import PageTitle from '../PageTitle/PageTitle';
import SelectedTags from '../SelectedTags/SelectedTags';
import ArticleBlocksColumn from '../ArticleBlocksColumn/ArticleBlocksColumn';
import ArticleBlock from '../ArticleBlock/ArticleBlock';
import Sidebar from '../Sidebar/Sidebar';
import ArticleTagsFilter from '../ArticleTagsFilter/ArticleTagsFilter';

export default function AgronomyPage() {

  const [articles, setArticles] = useState({});
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);

  // fetch articles from API

  let ignore = true; // used to prevent calling API twice on mount

  useEffect(() => {

    const getArticles = async () => {
      try {
        const res = await fetch('https://api.greatplainsag.com/v1/agronomy/en')
        const data = await res.json()
        setArticles(data);
        setTags(data.tags)
      } catch (e) {
        console.error(e.message)
      }
    }

    if(!ignore) {
      getArticles();
    }

    return () => { ignore = false }
  
  }, [selectedTags])



  return (
    <div className='agronomy-page-container'>
      
      <PageTitle text={"Great Plains Agronomy"}/>

      <SelectedTags selectedTags={selectedTags} tags={tags}/>

      <div className="agronomy-content-wrapper">

        <ArticleBlocksColumn>
          
          {articles.nidList&&
            articles.nidList.map(nid => (
              <ArticleBlock
                key={nid}
                article={articles.agronomy[nid]}
                setSelectedTags={setSelectedTags}
              />
            ))
          }

        </ArticleBlocksColumn>

        <Sidebar>

          <ArticleTagsFilter
            tags={tags}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
          />

        </Sidebar>

      </div>

    </div>
  )
}
