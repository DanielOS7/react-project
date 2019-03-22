import React from "react"

import PropTypes from 'prop-types'

export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            homeLink: props.initialLinkName,
            status: 0
        };
    }

    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        });

    }

    onChangeLink() {
        this.props.changeLink(this.state.homeLink);
    }

    onHandleChange(event) {
        this.setState({
            homeLink: event.target.value
        });
    }

    render() {
        return (
            <div>
                <p>In a new Component!</p>
                <p>Your Name is {this.props.name}. Your age is {this.state.age}</p>
                <p>Status: {this.state.status}</p>
                <hr />
                <button className="btn btn-primary" onClick={() => this.onMakeOlder()}>Make me older</button>
                <hr />
                <button className="btn btn-primary" onClick={this.props.greet}>Greet</button>
                <hr />
                <input type="text" value={this.state.homeLink} 
                onChange={(event) => this.onHandleChange(event)}/>
                <button className="btn btn-primary" onClick={() => this.onChangeLink()}>Change Header Link</button>
            </div>
        );
    }
}

//=====================

Home.propTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number,
    greet: PropTypes.func,
    initialLinkName: PropTypes.string
}