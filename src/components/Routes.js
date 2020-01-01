import React, { useEffect } from "react";
import {Switch, Route} from "react-router-dom";
import LeftMainNav from "./leftmainnav";
import Pages from "./farms/container";
import ClinicCreateNew from "./farms/farmCreateForm/container";
import PagesEdit from "./farms/farmEditForm/pageEditContainer";
import Dashboard from "./dashboard";
import Users from "./products/userContainer";
import UsersEdit from "./products/productEditForm/userEditContainer";
import NewUser from "./products/productCreateForm/newUser/container";
import mainUersList from "../components/usersMain/container";
import CeateUser from "../components/usersMain/userCreateForm";
import { withRouter } from "react-router-dom";

function Routes(props) {
    let {pathname, loggedIn} = props;

    useEffect(() => {
        if(!loggedIn){
            props.history.push('/login');
        }
    }, [loggedIn]);

    return (
        <div>
            <div className="main-container">
                <LeftMainNav path={pathname}/>
                <div className="main-routes">
                    <div className="rightSection">
                        <Switch>
                            <Route path={"/dashboard"} component={Dashboard}/>
                        </Switch>
                        <Switch>
                            <Route path={"/farms"} component={Pages}/>
                            <Route path={"/create/farm/new"} component={ClinicCreateNew}/>
                            <Route path={"/farm/edit/:id"} component={PagesEdit}/>
                            <Route path={"/products"} component={Users}/>
                            <Route exact path={"/product/add/new/:farmId"} component={NewUser}/>
                            <Route path={"/product/edit/:id/:farmId"} component={UsersEdit}/>
                            <Route path={"/user/edit/:id"} component={UsersEdit}/>
                            <Route path={"/user/create"} component={CeateUser}/>
                            <Route path={"/users"} component={mainUersList}/>
                        </Switch>
                    </div>
                </div>
            </div>
            <div/>
        </div>
    )
}
export default withRouter(Routes);
