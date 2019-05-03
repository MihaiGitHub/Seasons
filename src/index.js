import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    // First function called when this class is created
    constructor(props){
        // Reference to the parents constructor function; React.Component constructor
        super(props);

        this.state = {
            lat: null // state number initializing with null
        };

        // Gets executed once when this class is created
        window.navigator.geolocation.getCurrentPosition(
            // Success Callback
            (position) => {
                this.setState({
                    lat: position.coords.latitude
                });
            },
            // Failed Callback
            (err) => console.log(err)
        );
    }

    render(){
        return <div>Latitude: {this.state.lat}</div>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));