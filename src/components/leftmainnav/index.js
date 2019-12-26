import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import firebase from "../../utils/firebase";
import 'firebase/auth';
import cookie from "react-cookies";
class LeftMainNav extends Component {

    state = {
        current: null,
        show: false,
        display: false,
        hide: false,
        view: false
    };

    componentDidMount() {
        let { path } = this.props;
        this.setState({ current: path });
    }

    componentWillReceiveProps(nextProps) {
        let { path } = nextProps;
        this.setState({ current: path });
    }

    logOut = () => {
        cookie.remove('token');
        let { dispatch } = this.props;
        dispatch({
            type: "LOG_OUT",
            payload: null
        })
        firebase.auth().signOut();
        localStorage.removeItem('role');
        this.props.history.push('/login');
    };

    setCurrent(val) {
        let { current } = this.state;
        return current && (current.indexOf(val) !== -1) ? "active" : "";
    }

    render() {
        let { role } = this.props;
        return (
            <div className="leftSection">
                <div>
                    <div className="logo">
                        <img src={require("../../assets/images/FBT_Logo.png")} alt="images" />
                    </div>
                    <ul className="list-container">
                        <li>
                            <Link to="/dashboard" className={this.setCurrent("dashboard")}>
                                <span className="icon-dashboard" />
                                <span className="icon-dashboard1 span2" />Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to="/farms" className={this.setCurrent("farm")}><span className="icon-pages" />
                                <span className="icon-pages1 span2" />Clinics
                            </Link>
                        </li>
                        <li>
                            <Link to="/users" className={this.setCurrent("user")}><span className="icon-pages" />
                                <span className="icon-pages1 span2" />Users
                            </Link>
                        </li>
                        <li onClick={() => this.logOut()}>
                            <p className={this.setCurrent("logout")} onClick={() => this.setState({ show: true })}>
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

}
export default withRouter(LeftMainNav);