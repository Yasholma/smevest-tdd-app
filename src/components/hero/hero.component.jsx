import React from "react";
import { Link } from "react-router-dom";
import classes from "./hero.module.css";
import { connect } from "react-redux";

const Hero = ({ currentUser }) => {
    return (
        <div className={classes.Hero}>
            <div className={classes.GetStarted}>
                <h1>Welcome To Your Gateway Of Business Investment</h1>
                {!currentUser && (
                    <Link to='/signup' className={classes.SignUp}>
                        Get Started For Free
                    </Link>
                )}
            </div>
        </div>
    );
};

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser,
});

export default connect(mapStateToProps)(Hero);
