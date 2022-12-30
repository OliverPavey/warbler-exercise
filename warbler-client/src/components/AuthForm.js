import React,{Component} from "react";

class AuthForm extends Component {

    constructor(props) {
        super(props);
        this.state={
            email: "",
            username: "",
            password: "",
            profileImageUrl: "",
        };
    }

    handleChange=e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit=e => {
        e.preventDefault();
        const authType=this.props.signUp? "signup":"signin";
        this.props.onAuth(authType,this.state).then(() => {
            this.props.history.push("/");
        }).catch((rejection) => {
            console.log(rejection);
            console.log("log in failed");
        });
    }

    render() {
        const {email,username,password,profileImageUrl}=this.state;
        const {errors,heading,buttonText,signUp,removeError,history}=this.props;
        history.listen(() => {
            removeError();
            console.log("Called remove error");
        });
        return (
            <div>
                <div className="row justify-content-md-center text-center">
                    <div className="col-md-6">
                        <form onSubmit={this.handleSubmit}>
                            <h2>{heading}</h2>
                            {errors.message&&<div className="alert alert-danger">
                                {errors.message}
                            </div>}
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input className="form-contol" id="email" name="email"
                                    onChange={this.handleChange} value={email} type="text" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input className="form-contol" id="password" name="password"
                                    onChange={this.handleChange} type="password" />
                            </div>
                            {signUp&&<div>
                                <div className="form-group">
                                    <label htmlFor="username">Username:</label>
                                    <input className="form-contol" id="username" name="username"
                                        onChange={this.handleChange} value={username} type="text" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="image-url">Image URL:</label>
                                    <input className="form-contol" id="image-url" name="profileImageUrl"
                                        onChange={this.handleChange} value={profileImageUrl} type="text" />
                                </div>
                            </div>}
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-block btn-lg">{buttonText}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AuthForm;
