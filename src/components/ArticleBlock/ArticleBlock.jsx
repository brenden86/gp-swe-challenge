import React from 'react';
import './ArticleBlock.scss';

export default function ArticleBlock() {
  return (
    <article className='article-block'>

      <div className="block-content-wrapper">

        <div className="article-image">
          <img src="https://cdn-assets.greatplainsmfg.com/ag_files/styles/scale_500_wide/public/agronomy_images/small_199767479.jpg" alt="turkey" />
        </div>

        <div className="article-info">

          <div className="article-title">
            <h2>Article Title</h2>
          </div>

          <div className="article-tags">
            <button className="tag">tag1</button>
            <button className="tag">tag2</button>
          </div>

          <div className="article-summary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum laboriosam ducimus, impedit assumenda inventore nemo at totam? Consectetur consequatur a, neque quas veritatis quam sapiente rerum laudantium architecto, deserunt doloremque?
            Consequatur magnam expedita porro necessitatibus aliquid provident. Amet inventore quod labore harum fugiat totam distinctio repellendus. Quibusdam accusantium adipisci hic quos iusto, iste dolores assumenda delectus doloribus fuga, necessitatibus rerum.
            Dolorum cupiditate consequatur ducimus eius, ab ea non facere quae animi incidunt! Sunt rem eveniet fuga, maiores sequi possimus! Cum autem exercitationem ea repellat sapiente illum in eum molestiae cumque?
          </div>

        </div>

        
      </div>

      <button>read more</button>

    </article>
  )
}
