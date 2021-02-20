import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchNews } from "../redux/actions/fetchNews";

function SelectCountry(props) {
    const [country, selectCountry] = useState("us");

    useEffect(() => {
        props.fetchNews(country);
    }, [country]);

    const handleCountry = (value) => {
        if (country !== value) {
            selectCountry(value);
        }
    };

    return (
        <select
            onChange={(e) => handleCountry(e.target.value)}
            defaultValue={country}
        >
            <option value="us">US</option>
            <option value="in">India</option>
            <option value="de">Germany</option>
            <option value="rs">Serbia</option>
            <option value="ae">UAE</option>
            <option value="ar">Argentina</option>
            <option value="mx">Mexico</option>
            <option value="tr">Turkey</option>
        </select>
    );
}

function mapStateToProps(state) {
    return {};
}

const mapDispatchToProps = {
    fetchNews,
};
export default connect(mapStateToProps, mapDispatchToProps)(SelectCountry);
