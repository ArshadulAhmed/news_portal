import React, { useEffect } from "react";
import { connect } from "react-redux";
import { DefaultLoading } from "../components/DefaultLoading";
import SelectCountry from "../components/SelectCountry";
import { fetchNews } from "../redux/actions/fetchNews";
import NewsCard from "../components/NewsCard";
import "../assets/mainLayout.css";

function HomePage(props) {
    // useEffect(() => {
    //     props.fetchNews();
    // }, []);

    const newsItemToDisplay =
        props.getAllNews &&
        props.getAllNews.map((item, index) => (
            <NewsCard items={item} key={index} />
        ));

    return (
        <React.Fragment>
            <div className="home_top">
                <p>Top Headlines</p>
                <SelectCountry />
            </div>
            <div className="news_card_container">
                {props.isLoading ? <DefaultLoading /> : newsItemToDisplay}
            </div>
        </React.Fragment>
    );
}

function mapStateToProps(state) {
    return {
        isLoading: state.allNews.isLoading,
        getAllNews: state.allNews && state.allNews.articles,
    };
}

const mapDispatchToProps = {
    fetchNews,
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
