import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        // Success Callback
        (position) => console.log(position),
        // Failed Callback
        (err) => console.log(err)
    );
    return <div>App Works!</div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));