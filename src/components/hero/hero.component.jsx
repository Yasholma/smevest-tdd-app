import React from "react";
import { Link } from "react-router-dom";
import classes from "./hero.module.css";

const Hero = () => {
    return (
        <div className={classes.Hero}>
            <div className={classes.GetStarted}>
                <h1>Welcome To Your Gateway Of Business Investment</h1>
                <Link to='/register' className={classes.Register}>
                    Get Started
                </Link>
            </div>
        </div>
    );
};

export default Hero;
