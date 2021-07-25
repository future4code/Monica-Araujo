import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FeedPage from '../pages/FeedPage/FeedPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import PostPage from '../pages/PostPage/PostPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import {BASE_URL} from '../constants/urls'
import { useRequestData } from '../hooks/useRequestData'

const Router = ({setRightButtonText}) => {

    const posts = useRequestData([], `${BASE_URL}/posts`)

    return (
            <Switch>
                <Route exact path='/login'>
                    <LoginPage setRightButtonText={setRightButtonText}/>
                </Route>
                <Route exact path='/'>
                    <FeedPage posts={posts}/>
                </Route>
                <Route exact path='/post/:id'>
                    <PostPage posts={posts}/>
                </Route>
                <Route exact path='/cadastro'>
                    <SignUpPage setRightButtonText={setRightButtonText}/>
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>   
        )
}
export default Router