import React from "react";
import {Switch, Route} from "react-router-dom";
import LeftMainNav from "./leftmainnav";
import Pages from "./farms/container";
import ClinicCreateNew from "./farms/farmCreateForm/container";
import PagesEdit from "./farms/farmEditForm/pageEditContainer";
import Dashboard from "./dashboard";
import Users from "./products/userContainer";
import UsersEdit from "./products/productEditForm/userEditContainer";
import NewUser from "./products/productCreateForm/newUser/container";

function Routes(props){
    let {pathname} = props;
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
                        </Switch>
                    </div>
                </div>
            </div>
            <div/>
        </div>
    )
}
export default Routes;
