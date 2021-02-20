import React, { useState } from "react";
import { removeReduxError } from "../redux/utils/messages";
import { connect } from "react-redux";

function MessageTost(props) {
    const [errorMessage, setErrorMessage] = useState(true);

    const handleErrorMessage = () => {
        if (errorMessage) {
            setErrorMessage(false);
        }
        props.removeReduxError();
    };

    return (
        <div className="MessageTost_main">
            {errorMessage ? (
                <div className="errorTost">
                    <p onClick={handleErrorMessage} className="close">
                        &#10006;
                    </p>
                    <p>{props.getErrorInfo}</p>
                </div>
            ) : null}
        </div>
    );
}

function mapStateToProps(state) {
    return {
        getErrorInfo:
            state.errors && state.errors.msg && state.errors.msg.message,
    };
}

const mapDispatchToProps = {
    removeReduxError,
};
export default connect(mapStateToProps, mapDispatchToProps)(MessageTost);
