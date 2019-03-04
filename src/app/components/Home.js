import React from "react"

import PropTypes from 'prop-types'

export class Home extends React.Component {
    render() {
        console.log(this.props);
        var text = "Something!";
        return (
            <div>
                <p>In a new Component!</p>
                <p>{text}</p>
                <p>Your Name is {this.props.name}, Your age is {this.props.age}</p>
                <hr/>
                <h4>User 1</h4>
                <h6>Name: {this.props.user.name}</h6>
                <div>
                    <h6>Hobbies:</h6>
                    <ul>
                        {this.props.user.Hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                    </ul>
                </div>
                <hr/>
                {this.props.children}
            </div>
        );
    }
}

//=====================

Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object,
    children: PropTypes.element.isRequired
}