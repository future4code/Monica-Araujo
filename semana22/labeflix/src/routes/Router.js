import { Switch, BrowserRouter, Route } from "react-router-dom";
import React from "react";
import MainPage from '../screens/MainPage/MainPage'
import DetailPage from '../screens/DetailPage/DetailPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"} component={MainPage}/>
                <Route exact path={"/detail/:id"} component={DetailPage}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router