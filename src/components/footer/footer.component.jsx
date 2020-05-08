import React from "react";
import { Link } from "react-router-dom";
import classes from "./footer.module.css";
import logo from "../../assets/images/logo.png";
import {
    Room,
    Phone,
    Mail,
    Facebook,
    Twitter,
    Instagram,
    LinkedIn,
} from "@material-ui/icons";

const Footer = () => {
    return (
        <div className={classes.Footer}>
            <div className={classes.Container}>
                <div className={classes.Section1}>
                    <Link to='/'>
                        <img src={logo} alt='Logo' />
                    </Link>
                </div>
                <div className={classes.Section2}>
                    <p>
                        <Room /> No. 3 Andela Estate, NY.
                    </p>
                    <p>
                        <Phone /> +234 (80) 1234 5678
                    </p>
                    <p>
                        <Mail />{" "}
                        <a href='mailto:info@smevest.org'>info@smevest.org</a>
                    </p>
                </div>
                <div className={classes.Section3}>
                    <ul className={classes.Quicklinks}>
                        <li>
                            <Link to='/about-use'>About Us</Link>
                        </li>
                        <li>
                            <Link to='/wwd'>What We Do</Link>
                        </li>
                        <li>
                            <Link to='/faq'>FAQ</Link>
                        </li>
                    </ul>
                    <ul className={classes.Quicklinks}>
                        <li>
                            <Link to='/about-use'>Career</Link>
                        </li>
                        <li>
                            <Link to='/wwd'>Blog</Link>
                        </li>
                        <li>
                            <Link to='/faq'>Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div className={classes.Section4}>
                    <ul className={classes.SocialIcons}>
                        <a
                            href='https://twitter/yasholma'
                            rel='noopener noreferrer'
                            target='_blank'
                        >
                            <Facebook />
                        </a>
                        <a
                            href='https://twitter/yasholma'
                            rel='noopener noreferrer'
                            target='_blank'
                        >
                            <Twitter />
                        </a>
                        <a
                            href='https://twitter/yasholma'
                            rel='noopener noreferrer'
                            target='_blank'
                        >
                            <Instagram />
                        </a>
                        <a
                            href='https://twitter/yasholma'
                            rel='noopener noreferrer'
                            target='_blank'
                        >
                            <LinkedIn />
                        </a>
                    </ul>
                </div>
            </div>
            <p className={classes.Copyright}>
                &copy; Copyright 2020 SmeVest. All rights reserved.
            </p>
        </div>
    );
};

export default Footer;
