import React from "react";
import { Link } from "react-router-dom";
import SearchComponent from "../components/SearchComponent";

export function Header() {
    return (
        <div className="header_main">
            <Link to="/">Home</Link>
            <SearchComponent />
        </div>
    );
}
