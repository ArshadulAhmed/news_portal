import React from "react";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <div className="header_main">
            <Link to="/">Home</Link>
            <Link to="/search">Search News</Link>
        </div>
    );
}
