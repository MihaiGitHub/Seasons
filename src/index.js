import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    // First function called when this class is created; not required
    constructor(props){
        // Reference to the parents constructor function; React.Component constructor
        super(props);

        this.state = {
            lat: null, // state number initializing with null
            errorMessage: ''
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
            (err) => {
                this.setState({
                    errorMessage: err.message
                });
            }
        );
    }

    // App component will render 2 times; first when app boots up and a second time when state is updated
    render(){
        return (<div>
                Latitude: {this.state.lat}
                <br />
                Error: {this.state.errorMessage}
                </div>
            );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));