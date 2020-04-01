import React, { Component } from 'react';
import './PrimarryButton.sass';

class PrimarryButton extends Component {
    constructor(props) {
        super(props);

    }
calculateSize(type) {
        if(!type) return {width: 400, height: 200};
        if(type.toLowerCase() ==="big") {
            return {width: 400, height: 200};
        } else if(type.toLowerCase() ==="Small") {
            return {width: 50, height: 25};
        } else if(type.toLowerCase() ==="Middle") {
        return(width: 0, height: 0);
        }
}
    render() {
        console.log(this.props);
        return (

            <button style={{'background-color': this.props.color,
            width: 0, heght: 0}}>
                {this.props.titleBtn || "Button"}
            </button>

        );
    }
}

export default PrimarryButton;
