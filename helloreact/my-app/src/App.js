import React, { Component } from 'react';
import './App.css';
import './test.sass';
import PrimaryCalendar from './components/PrimaryCalendar/PrimaryCalendar'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        console.log("render");
    return (
        <div className="App">
            <PrimaryCalendar/>
        </div>
    );
  }

}

export default App;
