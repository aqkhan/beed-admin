import React from "react";
import {Switch, Route} from "react-router-dom";
import LeftMainNav from "./leftmainnav";
import Pages from "./farms/container";
import ClinicCreateType from "./farms/farmCreateForm/container";
import ClinicCreateNew from "./farms/farmCreateForm/newUser/container";
import PagesEdit from "./farms/farmEditForm/pageEditContainer";
import Dashboard from "./dashboard";
import Users from "./clinicUsers/userContainer";
import UsersCreateType from "./clinicUsers/userCreateForm";
import UsersEdit from "./clinicUsers/userEditForm/userEditContainer";
import NewUser from "./clinicUsers/userCreateForm/newUser/container";

function Routes(props){
    let {pathname, dispatch, user, role} = props;
    return (
        <div>
            <div className="main-container">
                <LeftMainNav path={pathname} dispatch={dispatch} user={user} role={role}/>
                <div className="main-routes">
                    <div className="rightSection">
                        <Switch>
                            <Route path={"/dashboard"} component={Dashboard}/>
                        </Switch>
                        {
                            role === 'superAdmin' &&
                            <Switch>
                                <Route path={"/farms"} component={Pages}/>
                                <Route path={"/farm/create"} component={ClinicCreateType}/>
                                <Route path={"/create/farm/new"} render={() => <ClinicCreateNew newClinic={false}/>}/>
                                <Route path={"/farm/edit/:id"} component={PagesEdit}/>
                                <Route path={"/users"} component={Users}/>
                                <Route exact path={"/user/add"} component={UsersCreateType}/>
                                <Route exact path={"/user/add/new"} component={NewUser}/>
                                <Route path={"/user/edit/:id"} component={UsersEdit}/>
                            </Switch>
                        }
                    </div>
                </div>
            </div>
            <div/>
        </div>
    )
}
export default Routes;
