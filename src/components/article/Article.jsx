import React from 'react'
import "./article.css"
function Article({url,date,text}) {
  return (
    <div className='gpt3__blog-container_article'>
      <div className="gpt3__blog-container_article-img">
      <img src={url} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
    </div>
  )
}

export default Article
