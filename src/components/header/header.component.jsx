import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import classes from "./header.module.css";

const Header = () => {
    return (
        <header className={classes.Header}>
            <div className={classes.Container}>
                <div className={classes.Brand}>
                    <Link to='/'>
                        <img src={logo} alt='Logo' />
                    </Link>
                </div>
                <div className={classes.NavigationList}>
                    <Link to='/login' className={classes.Login}>
                        Login
                    </Link>
                    <Link to='/register' className={classes.Register}>
                        Register
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
