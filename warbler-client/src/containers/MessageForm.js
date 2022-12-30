import React, {Component} from "react";
import {connect} from "react-redux";
import {postNewMessage} from "../store/actions/messages.js";

class MessageForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
        };
    }

    handleNewMessage = event => {
        event.preventDefault();
        this.props.postNewMessage(this.state.message);
        this.setState({message: ""});
        this.props.history.push("/");
    }

    updateMessage = event => {
        this.setState({message: event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleNewMessage}>
                {this.props.errors.message && <div className="alert alert-danger">{this.props.errors.message}</div>}
                <input type="text" className="form-control" value={this.state.message} onChange={this.updateMessage} />
                <button className="btn btn-success pull-right" type="submit">Add Message</button>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        errors: state.errors,
    };
}

export default connect(mapStateToProps, {postNewMessage})(MessageForm);