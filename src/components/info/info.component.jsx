import React from "react";
import classes from "./info.module.css";
import infoImage from "../../assets/images/info-image.webp";
import { OfflineBolt, Security, SupervisorAccount } from "@material-ui/icons";

const Info = () => {
    return (
        <div className={classes.Info}>
            <div className={classes.Container}>
                <section className={classes.InfoSocial}>
                    <div className={classes.Icon}>
                        <OfflineBolt
                            style={{ fontSize: 60, color: "#d4475a" }}
                        />
                        <p>Fast</p>
                    </div>
                    <div className={classes.Icon}>
                        <Security style={{ fontSize: 60, color: "#47d486" }} />
                        <p>Secure</p>
                    </div>
                    <div className={classes.Icon}>
                        <SupervisorAccount
                            style={{ fontSize: 60, color: "#4789d4" }}
                        />
                        <p>Connect</p>
                    </div>
                </section>
                <section className={classes.InfoDetails}>
                    <div className={classes.Details}>
                        <div>
                            <h2>
                                <OfflineBolt />
                                Fast Connection
                            </h2>
                            <p>A reliable system that offers fast connection</p>
                        </div>
                        <div>
                            <h2>
                                <Security />
                                Secured Connection
                            </h2>
                            <p>Your connection is secured with this system</p>
                        </div>
                        <div>
                            <h2>
                                <SupervisorAccount />
                                SME/Investor
                            </h2>
                            <p>The right connection is waiting for you</p>
                        </div>
                    </div>
                    <div className={classes.Image}>
                        <img src={infoImage} alt='Info' />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Info;
