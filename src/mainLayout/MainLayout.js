import React from "react";
import { Header } from "../components/Header";

import "../assets/mainLayout.css";

function MainLayout(props) {
    return (
        <div className="mainLayout">
            <Header />
            <div>{props.children}</div>
        </div>
    );
}

export default MainLayout;
