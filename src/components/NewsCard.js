import React from "react";
import { Link } from "react-router-dom";

export function NewsCard(props) {
    const { items } = props;
    console.log(items);
    return (
        <div className="news_card_main">
            <div className="news_image">
                <img src={items.urlToImage} alt={items.author} />
            </div>
            <div className="news_description">
                <p>{items.author}</p>
                <p>{items.content}</p>
                <p>{items.description}</p>
                <p>{items.publishedAt}</p>
                <p>{items.publishedAt}</p>
                <a href={items.url} target="_blank" rel="noopener noreferrer">
                    Read more...
                </a>
            </div>
        </div>
    );
}

export default NewsCard;
