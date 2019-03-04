import React from "react"

import PropTypes from 'prop-types'

export class Home extends React.Component {
    constructor(props) {
        super();
        this.age = props.age;
    }
    
    onMakeOlder() {
        this.age += 3;
        console.log(this.age);
    }

    render() {
        return (
            <div>
                <p>In a new Component!</p>
                <p>Your Name is {this.props.name}. Your age is {this.age}</p>
                <hr/>
                <button className="btn btn-primary" onClick={() => this.onMakeOlder()}>Make me older</button>
            </div>
        );
    }
}

//=====================

Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
}