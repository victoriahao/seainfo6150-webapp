import React from 'react';

import './ArticleListItem.module.css';

const ArticleListItem = props => {
    return(
      <div>
          <head>
              <title>Articles</title>
          </head>
          <body>
              <h3>{props.article.title}</h3>
              <p>{props.article.shortText}</p>
              <time dateTime = {props.article.pubYear}>
                  {props.article.pubDate}
              </time>
              <button onClick = {() => alert(props.article.slug)}>
                  {props.article.author}
              </button>
          </body>
      </div>    
    )
}

export default ArticleListItem;


