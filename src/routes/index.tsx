import React, { ReactElement } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import { LoginPage, SignupPage, NewsPage, NotFoundPage } from  "../pages";

export const MainRouter = () => {
    return(
    <Router>
        <Routes>
            <Route index element={<LoginPage/>} />
            <Route path="signup"  element={<SignupPage/>}/>
            <Route path="/news" element={<NewsPage/>} />
            <Route path="*" element={<NotFoundPage/>} />
        </Routes>
    </Router>
    )
}