import React from "react";
import { Link } from "react-router-dom";
import classes from "./register.module.css";
import { Facebook, Mail } from "@material-ui/icons";

class Register extends React.Component {
    state = {
        email: "",
        password: "",
        confirm: "",
        category: "",
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log("Submit");
    };
    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className={classes.Register}>
                <div className={classes.Container}>
                    <h2>Register With SmeVest</h2>
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
                        <div className={classes.FormGroup}>
                            <input
                                type='password'
                                value={this.state.confirm}
                                id='confirm'
                                name='confirm'
                                placeholder='Confirm Password'
                                onChange={this.handleChange}
                            />
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
                        </div>
                        <div className={classes.FormButtons}>
                            <div className={classes.OAuthLinks}>
                                <h4>Registration Options</h4>
                                <Facebook
                                    style={{
                                        margin: "0 5px",
                                        color: "#fff",
                                        background: "#3b5998",
                                        padding: 5,
                                        borderRadius: "50%",
                                        cursor: "pointer",
                                    }}
                                />
                                <Mail
                                    style={{
                                        margin: "0 5px",
                                        color: "#fff",
                                        background: "#D44638",
                                        padding: 5,
                                        borderRadius: "50%",
                                        cursor: "pointer",
                                    }}
                                />
                            </div>
                            <button type='submit'>Register</button>
                        </div>
                        <p>
                            Already have an account?{" "}
                            <Link to='/login'>Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;
