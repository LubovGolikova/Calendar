import React, { Component } from 'react';
import './PrimaryInput.sass';

class PrimaryInput extends Component {

renderErrorMessage() {
    if(!this.props.isDataValid) {
        return <span className={'Input-error-message'}>{this.props.errorMessage}</span>;
    }
}
componentWillReceiveProps(nextProps, nextContext) {
    console.log("INPUT", nextProps.value);
    console.log("INPUT", this.props.value);
}

    render() {
        return (
            <>
                <label>{this.props.title}</label>
                <input placeholder={this.props.placeholder}
                       value={this.props.value}
                       onChange={
                           (even)=>
                           this.props.onTextChange(even.target.value, this.props.type)
                       }
                       type={this.props.type}/>
                {this.renderErrorMessage()}
                </>
        );
    }
}

export default PrimaryInput;
