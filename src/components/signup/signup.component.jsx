import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signUpAuth } from "../../redux/actions/auth-actions";
import classes from "./signup.module.css";
import { Mail } from "@material-ui/icons";
import {
    signInWithGoogle,
    createUserProfileDocument,
} from "../../firebase/firebase.utils";

class SignUp extends React.Component {
    state = {
        email: "",
        password: "",
        confirm: "",
        category: "",
        error: null,
    };

    componentWillUnmount() {
        this.setState({
            email: "",
            password: "",
            confirm: "",
            category: "",
            error: null,
        });
    }

    googleSignIn = async () => {
        const { category } = this.state;
        if (!category) {
            this.setState({
                error: {
                    category: "Please, select category",
                },
            });
            return;
        }

        const { user } = await signInWithGoogle();
        if (user) {
            try {
                await createUserProfileDocument(user, { category });
            } catch (error) {
                console.log(error);
            }
        }
    };

    handleSubmit = e => {
        e.preventDefault();

        const { email, password, category, confirm } = this.state;

        if (!email || !password || !category) {
            this.setState({
                error: {
                    other: "All fields are required",
                },
            });
            return;
        }

        if (password.length < 6) {
            this.setState({
                error: {
                    password: {
                        lengthErr: "Password should be at least 6 characters",
                    },
                },
            });
            return;
        }

        if (password !== confirm) {
            this.setState({
                error: {
                    password: {
                        confirmErr: "Password does not match",
                    },
                },
            });
            return;
        }

        if (!category) {
            this.setState({
                error: {
                    category: "Please, select category",
                },
            });
            return;
        }

        this.props.onSignUp(email, password, category);

        this.setState({
            email: "",
            password: "",
            confirm: "",
            category: "",
            error: null,
        });
    };
    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        const { loading, error } = this.props;
        return (
            <div className={classes.SignUp}>
                <div className={classes.Container}>
                    <h2>SignUp With SmeVest</h2>
                    {this.state.error && this.state.error.other && (
                        <h3 className={classes.GeneralError}>
                            {this.state.error.other}
                        </h3>
                    )}
                    {error && error.other && (
                        <h3 className={classes.GeneralError}>{error.other}</h3>
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
                            {error && error.email && (
                                <h5 className={classes.Error}>{error.email}</h5>
                            )}
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
                            {this.state.error && this.state.error.password && (
                                <small className={classes.Error}>
                                    {this.state.error.password.lengthErr}
                                </small>
                            )}
                            {error && error.password && (
                                <h5 className={classes.Error}>
                                    {error.password}
                                </h5>
                            )}
                        </div>
                        <div className={classes.FormGroup}>
                            <input
                                type='password'
                                value={this.state.confirm}
                                id='confirm'
                                name='confirm'
                                placeholder='Confirm Password'
                                onChange={this.handleChange}
                            />
                            {this.state.error && this.state.error.password && (
                                <small className={classes.Error}>
                                    {this.state.error.password.confirmErr}
                                </small>
                            )}
                        </div>
                        <div className={classes.FormGroup}>
                            <select
                                value={this.state.category}
                                onChange={this.handleChange}
                                name='category'
                            >
                                <option value=''>Category</option>
                                <option value='sme'>SME</option>
                                <option value='investor'>INVESTOR</option>
                            </select>
                            {this.state.error && this.state.error.category && (
                                <h5 className={classes.Error}>
                                    {this.state.error.category}
                                </h5>
                            )}
                        </div>
                        <div className={classes.FormButtons}>
                            <div className={classes.OAuthLinks}>
                                <h4>SignUp Options</h4>
                                <Mail
                                    style={{
                                        margin: "0 5px",
                                        color: "#fff",
                                        background: "#D44638",
                                        padding: 5,
                                        borderRadius: "50%",
                                        cursor: "pointer",
                                    }}
                                    onClick={this.googleSignIn}
                                />
                            </div>

                            {loading ? (
                                <div className={classes.Loading}>
                                    <span></span>
                                </div>
                            ) : (
                                <button type='submit'>SignUp</button>
                            )}
                        </div>
                        <p>
                            Already have an account?{" "}
                            <Link to='/signin'>Sign In</Link>
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
    onSignUp: (email, password, category) =>
        dispatch(signUpAuth(email, password, category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
