import React from 'react';

import './SlugButton.module.css';

//import buttonText from './buttonText'
//import slug from './slug'

const SlugButton = props => {
    return(

      <div>
          <head>
              <title>Articles</title>
          </head>
          <body>
              <button onClick = {() => alert(props.article.slug)}>
                  {props.article.author}
              </button>
          </body>
      </div>       
    )
}

export default SlugButton;