import React, { ReactElement } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import { LoginPage, SignupPage, DashboardPage, NewsPage, NotFoundPage } from  "../pages";

export const MainRouter = () => {
    return(
    <Router>
        <Routes>
            <Route path="/auth">
                <Route path="login" element={<LoginPage/>} />
                <Route path="signup"  element={<SignupPage/>}/>
            </Route>
            <Route path="/" >
                <Route path="profile" element={<DashboardPage/>}/>
                <Route path="news" element={<NewsPage/>} />
            </Route>
            <Route path="*" element={<NotFoundPage/>} />
        </Routes>
    </Router>
    )
}