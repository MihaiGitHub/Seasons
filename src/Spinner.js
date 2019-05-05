import React from 'react';

const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.message}</div>
        </div>
    );
};

// Provides default properties to this component which will be used if no props passed for message
Spinner.defaultProps = {
    message: 'Loading...'
}

export default Spinner;