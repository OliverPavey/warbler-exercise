import React from "react";
import {Switch,Route,withRouter,Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Homepage from "../components/Homepage";
import AuthForm from "../components/AuthForm";
import {authUser} from "../store/actions/auth";
import {removeError} from "../store/actions/errors";
import withAuth from "../hocs/withAuth";
import MessageForm from "../containers/MessageForm";

const Main=props => {
    const {errors,authUser,removeError,currentUser}=props;
    return (
        <div className="container">
            <Switch>
                <Route exact path="/" render={props => <Homepage currentUser={currentUser} {...props} />} />
                <Route exact path="/signin" render={props => {
                    return (
                        <AuthForm
                            errors={errors}
                            removeError={removeError}
                            onAuth={authUser}
                            buttonText="Sign in"
                            heading="Sign in to Warbler." 
                            {...props} />
                    );
                }} />
                <Route exact path="/signup" render={props => {
                    return (
                        <AuthForm
                            signUp
                            errors={errors}
                            removeError={removeError}
                            onAuth={authUser}
                            buttonText="Sign me up"
                            heading="Sign up to Warbler." 
                            {...props} />
                    );
                }} />
                <Route path="/users/:id/messages/new" component={withAuth(MessageForm)} />
            </Switch>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser,
        errors: state.errors,
        removeError,
    };
}

export default withRouter(connect(mapStateToProps,{authUser,removeError})(Main));
