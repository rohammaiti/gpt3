import React from "react";
import './Article.css';

const Article=( { imgUrl, date, title } )=>{
    return(
        <div className="gpt3__blog-conatiner_article">
            <div className="gpt3__blog-container_article-image">
                <img src={imgUrl} alt="blog"/>
            </div>
            <div className="gpt3__blog-container_article-content">
                <div>
                    <p>{date}</p>
                    <h2>{title}</h2>
                </div>
                <p>Read More...</p>
            </div>
        </div>
    )
}

export default Article;