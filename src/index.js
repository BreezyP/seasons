import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";

import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

    //this is how we would normally construct our state

    // constructor(props){
    //     super(props);
    //
    //
    //     //setting out state
    //     this.state = { lat: null, errorMessage: ''};
    // }

    //Using babel we can shorthand this into just one line
    state = {lat: null, errorMessage: ''};


    /* Life cycle methods

        Constructor
        render
            content becomes visible on screen
        componentDidMount() gets called
            sit and wait for updates sort of like a listener
        componentDidUpdate()
            sit and wait until our component no longer is shown
        componentWillUnmount()

        * */

    //gets called after our content is first loaded and is only called once
    //primarily used for data loading
    //here we are calling some data that needs time to load
    //we are calling making a call to the geolocation api which is asynchronous
    //since the data will take some time to load we should put it here
    //and not in the constructor
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition((position) => {
            this.setState({ lat: position.coords.latitude });
        }, (err) => {
            this.setState({ errorMessage:err.message })
        });

    }

    //gets called every time our render gets updated or our state changes
    componentDidUpdate(prevProps, prevState, snapshot) {console.log('our component updated');
    }


    render() {


        //conditional rendering
        if(this.state.errorMessage && !this.state.lat) {return <div> Error: {this.state.errorMessage} </div> }
        if(this.state.lat && !this.state.errorMessage) {return  <SeasonDisplay lat={this.state.lat}/> }
        if(!this.state.lat && !this.state.errorMessage) {return  <div> Latitude: loading...</div>}

    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);