import React from "react";
import moment from "moment";

export function NewsCard(props) {
    const { items } = props;

    // If no author detail/content details found retun null
    if (!items.author || !items.content) {
        return null;
    }

    return (
        <div className="news_card_main">
            <div className="news_image">
                <img
                    src={items.urlToImage}
                    alt={items.author}
                    className="image_news"
                />
            </div>
            <div className="news_description">
                <p className="news_author">
                    {items.author ? items.author : "No author details"}
                </p>
                <p className="news_content">
                    {items.content
                        ? items.content.substr(0, 100) + "..."
                        : "No Data"}
                </p>
                <p className="news_description">
                    {items.description
                        ? items.description.substr(0, 100) + "..."
                        : "No Data"}
                </p>
                <p className="news_published">
                    Published on:{" "}
                    {moment(items.publishedAt).format("MM-DD-YYYY")}
                </p>

                <p className="readMore">
                    <a
                        href={items.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Read more...
                    </a>
                </p>
            </div>
        </div>
    );
}

export default NewsCard;
