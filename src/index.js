import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

const App = () => {
    // lat - value of the state property; setLat - function we use to change that value
    const [lat, setLat] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        // Gets executed once when this class is created
        window.navigator.geolocation.getCurrentPosition(
            // Success Callback
            position => setLat(position.coords.latitude),
            // Failed Callback
            err => setErrorMessage(err.message)
        );
    }, []); // Only run this function one time for the entire component lifecycle

    let content;
    if(errorMessage){
        content = <div>Error: {errorMessage}</div>
    } else if (lat){
        content = <SeasonDisplay lat={lat} />;
    } else {
        content = <Spinner message="Please accept location request" />;   
    }

    return <div className="border red">{content}</div>
};

ReactDOM.render(<App />, document.querySelector('#root'));