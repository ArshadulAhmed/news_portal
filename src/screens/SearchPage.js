import React, { useState } from "react";
import { connect } from "react-redux";
import { DefaultLoading } from "../components/DefaultLoading";
import { searchNews } from "../redux/actions/searchNews";
import NewsCard from "../components/NewsCard";

function SearchPage(props) {
    const [error, setError] = useState(null);

    const letters = /^[A-Za-z0-9 ]+$/;

    const handleSearch = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const keyWord = data.get("search");
        console.log(keyWord);
        if (keyWord.trim() === "" || keyWord.trim === undefined) {
            setError("Please enter search item...");
        } else if (keyWord.match(letters)) {
            setError(null);
            props.searchNews(keyWord);
        } else {
            setError("Search only with alphabates and numbers");
        }
    };

    const newsItemToDisplay =
        props.getAllNews &&
        props.getAllNews.map((item, index) => (
            <NewsCard items={item} key={index} />
        ));

    return (
        <React.Fragment>
            <div className="search_form">
                <form onSubmit={(e) => handleSearch(e)}>
                    <input
                        type="text"
                        placeholder="Enter Search Keyword here..."
                        name="search"
                    />
                    <button type="submit">Search</button>
                    {error ? <p className="error">{error}</p> : null}
                </form>
            </div>
            <div className="news_card_container">
                {props.isLoading ? <DefaultLoading /> : newsItemToDisplay}
            </div>
        </React.Fragment>
    );
}

function mapStateToProps(state) {
    return {
        isLoading: state.searchResult.isLoading,
        getAllNews: state.searchResult && state.searchResult.articles,
    };
}

const mapDispatchToProps = {
    searchNews,
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
