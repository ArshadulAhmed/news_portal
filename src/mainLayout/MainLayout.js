import React from "react";
import "../assets/mainLayout.css";

function MainLayout(props) {
    return (
        <div className="mainLayout">
            <div className="site-layout">
                <div
                    className="site-layout-background"
                    style={{
                        margin: "24px 16px",
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default MainLayout;
