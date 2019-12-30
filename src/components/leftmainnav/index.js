import React, { useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import cookie from "react-cookies";

function LeftMainNav(props) {
    let { path } = props;
    const [current, setCurrentPath] = useState(null);

    useEffect(() => {
        setCurrentPath(path);
    }, [path]);

    const logOut = () => {
        cookie.remove('token');
        window.location.href = "/login";
    };

    const setCurrent = (val) => {
        return current && (current.indexOf(val) !== -1) ? "active" : "";
    }

    return (
        <div className="leftSection">
            <div>
                <div className="logo">
                    <img src={require("../../assets/images/logo.png")} alt="images" />
                </div>
                <ul className="list-container">
                    <li>
                        <Link to="/dashboard" className={setCurrent("dashboard")}>
                            <span className="icon-dashboard" />
                            <span className="icon-dashboard1 span2" />Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/farms" className={setCurrent("farm")}><span className="icon-pages" />
                            <span className="icon-pages1 span2" />Farms
                        </Link>
                    </li>
                    <li>
                        <Link to="/users" className={setCurrent("user")}><span className="icon-pages" />
                            <span className="icon-pages1 span2" />Users
                        </Link>
                    </li>
                    <li onClick={() => logOut()}>
                        <p className={setCurrent("logout")}>
                            <span className="icon-C_events_ico" />
                            <span className="icon-C_events_ico1 span2" />Logout
                        </p>
                    </li>
                </ul>
            </div>
            <div >
            </div>
        </div>
    )

}
export default withRouter(LeftMainNav);