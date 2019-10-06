import { useState, useEffect } from 'react';

export default () => {
    // lat - value of the state property; setLat - function we use to change that value
    // exporting state to other components (lat, errorMessage)
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

    return [lat, errorMessage];
};