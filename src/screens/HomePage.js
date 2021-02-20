import React from "react";
import { connect } from "react-redux";

import { DefaultLoading } from "../components/DefaultLoading";
import "../assets/mainLayout.css";

function HomePage(props) {
    return (
        <React.Fragment>
            <h1>Home Page</h1>
        </React.Fragment>
    );
}

function mapStateToProps(state) {
    return {};
}

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
