import React, { useEffect } from "react";
import { connect } from "react-redux";
import { DefaultLoading } from "../components/DefaultLoading";
import { fetchNews } from "../redux/actions/fetchNews";
import NewsCard from "../components/NewsCard";
import "../assets/mainLayout.css";

function HomePage(props) {
    useEffect(() => {
        props.fetchNews();
    }, []);

    const newsItemToDisplay =
        props.getAllNews &&
        props.getAllNews.map((item, index) => (
            <NewsCard items={item} key={index} />
        ));

    return (
        <React.Fragment>
            <h1>Home Page</h1>
            {newsItemToDisplay}
        </React.Fragment>
    );
}

function mapStateToProps(state) {
    return {
        getAllNews: state.allNews && state.allNews.articles,
    };
}

const mapDispatchToProps = {
    fetchNews,
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
