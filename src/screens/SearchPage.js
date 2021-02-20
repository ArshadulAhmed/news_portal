import React, { useState } from "react";
import { connect } from "react-redux";
import { DefaultLoading } from "../components/DefaultLoading";
import { searchNews } from "../redux/actions/searchNews";
import NewsCard from "../components/NewsCard";
import MessageTost from "../components/MessageTost";

function SearchPage(props) {
    const [error, setError] = useState(null);
    const letters = /^[A-Za-z0-9 ]+$/;

    const handleSearch = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const keyWord = data.get("search");
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

                {props.totalResult === 0 && !props.isLoading ? (
                    <p className="searchPage">No result found</p>
                ) : !props.isLoading && props.totalResult !== 1 ? (
                    <p className="searchPage">
                        Enter search keyword and hit submit
                    </p>
                ) : null}
                {props.getErrorInfo ? <MessageTost /> : null}
            </div>
        </React.Fragment>
    );
}

function mapStateToProps(state) {
    return {
        isLoading: state.searchResult.isLoading,
        totalResult: state.searchResult && state.searchResult.totalResults,
        getAllNews: state.searchResult && state.searchResult.articles,

        getErrorInfo:
            state.errors && state.errors.msg && state.errors.msg.message,
    };
}

const mapDispatchToProps = {
    searchNews,
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
