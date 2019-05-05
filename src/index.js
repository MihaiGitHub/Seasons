import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    // Babel will take this and implement the constructor function
    state = {
        lat: null, // state number initializing with null
        errorMessage: ''
    };

    componentDidMount(){
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
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if(!this.state.errorMessage && this.state.lat){
            // When component rerenders all children will be rerender also
            return <SeasonDisplay lat={this.state.lat} />;
        }

        return <Spinner message="Please accept location request" />;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));