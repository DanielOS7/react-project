import React from "react"

export class Home extends React.Component {
    render() {
        console.log(this.props);
        var text = "Something!";
        return (
            <div>
                <p>In a new Component!</p>
                <p>{text}</p>
                <p>Your Name is {this.props.name}, Your age is {this.props.age}</p>
                <h4>User 1</h4>
                <h6>Name: {this.props.user.name}</h6>
                <div>
                    <h6>Hobbies:</h6>
                    <ul>

                    </ul>
                </div>
            </div>
        );
    }
}