import React from "react";
import { Link } from "react-router-dom";
import classes from "./signin.module.css";
import { Mail } from "@material-ui/icons";
import { signInAuth } from "../../redux/actions/auth-actions";
import { connect } from "react-redux";
import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
    state = {
        email: "",
        password: "",
    };

    componentWillMount() {
        this.setState({ email: "", password: "" });
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { email, password } = this.state;

        this.props.onSignIn(email, password);

        this.setState({
            email: "",
            password: "",
        });
    };

    render() {
        const { loading, error } = this.props;
        return (
            <div className={classes.SignIn}>
                <div className={classes.Container}>
                    <h2>SignIn To SmeVest</h2>
                    {error && error.any && (
                        <h3 className={classes.GeneralError}>{error.any}</h3>
                    )}
                    <form onSubmit={this.handleSubmit} className={classes.Form}>
                        <div className={classes.FormGroup}>
                            <input
                                type='email'
                                value={this.state.email}
                                id='email'
                                name='email'
                                placeholder='Email Address'
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className={classes.FormGroup}>
                            <input
                                type='password'
                                value={this.state.password}
                                id='password'
                                name='password'
                                placeholder='Password'
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className={classes.FormButtons}>
                            <div className={classes.OAuthLinks}>
                                <h4>Sign In Option</h4>
                                <Mail
                                    style={{
                                        margin: "0 5px",
                                        color: "#fff",
                                        background: "#D44638",
                                        padding: 5,
                                        borderRadius: "50%",
                                        cursor: "pointer",
                                    }}
                                    onClick={signInWithGoogle}
                                />
                            </div>
                            {loading ? (
                                <div className={classes.Loading}>
                                    <span></span>
                                </div>
                            ) : (
                                <button type='submit'>Sign In</button>
                            )}
                        </div>
                        <p>
                            Don't have an account yet?{" "}
                            <Link to='/signup'>SignUp</Link>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ auth }) => ({
    loading: auth.loading,
    error: auth.error,
});

const mapDispatchToProps = dispatch => ({
    onSignIn: (email, password) => dispatch(signInAuth(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
