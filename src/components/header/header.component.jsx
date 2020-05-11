import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import classes from "./header.module.css";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { signOut } from "../../redux/actions/user-actions";

const Header = ({ currentUser, signOutUser }) => {
    return (
        <header className={classes.Header}>
            <div className={classes.Container}>
                <div className={classes.Brand}>
                    <Link to='/'>
                        <img src={logo} alt='Logo' />
                    </Link>
                </div>
                <div className={classes.NavigationList}>
                    {!currentUser ? (
                        <>
                            <Link to='/signin' className={classes.Login}>
                                Sign In
                            </Link>
                            <Link to='/signup' className={classes.Register}>
                                Sign Up
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to='/dashboard' className={classes.Login}>
                                Dashboard
                            </Link>
                            <Link
                                to='/'
                                onClick={() => {
                                    signOutUser();
                                    auth.signOut();
                                }}
                                className={classes.Register}
                            >
                                Logout
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser,
});

const mapDispatchToProps = dispatch => ({
    signOutUser: () => dispatch(signOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
