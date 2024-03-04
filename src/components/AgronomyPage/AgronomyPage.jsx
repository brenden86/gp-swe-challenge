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
      setDataLoading(true)
      try {
        const res = await fetch('https://api.greatplainsag.com/v1/agronomy/en')
        const data = await res.json()
        setArticles(data);
        setTags(data.tags);
        setDataLoading(false)
      } catch (e) {
        console.error(e.message)
        setDataLoading(false)
      }
    }

    if(!ignore) {
      getArticles();
    }

    return () => { ignore = false }
  
  }, [])

  // helper function that returns true if an article has tags that are currently selected
  function checkTags(tagsArray) {
    let inArray = false;
    tagsArray.forEach(tag => {
      // if no tags are selected OR the article's tag is found
      // in the selectedTags array, return true
      if(selectedTags.length < 1 || selectedTags.includes(tag.tid)) {
        inArray = true;
      }
    })
    return inArray;
  }



  return (
    <div className='agronomy-page-container'>
      
      <PageTitle text={"Great Plains Agronomy"}/>

      <SelectedTags selectedTags={selectedTags} tags={tags}/>

      <div className="agronomy-content-wrapper">

        <ArticleBlocksColumn>

          {dataLoading &&<h1>LOADING...</h1>}
          
          {articles.nidList&&
            articles.nidList
              .filter(nid => (
                checkTags(Object.values(articles.agronomy[nid].categorization.tags.values))
              ))
              .map(nid => (
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
