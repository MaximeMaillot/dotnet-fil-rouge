import React from 'react';
import "./Router.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import ProjectsView from '../../Views/ProjectsView/ProjectsView';
import LoginView from '../../Views/LoginView/LoginView';
import SignupView from '../../Views/SignupView/SignupView';
import UsersView from '../../Views/UsersView/UsersView';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/projects' element={<ProjectsView />}></Route>
                    <Route path='/users' element={<UsersView />}></Route>
                    <Route path='/login' element={<LoginView />}></Route>
                    <Route path='/signup' element={<SignupView />}></Route>
                    <Route path='/*' element={<ProjectsView />}></Route>
                </Routes>
                <Outlet />
                <Footer />
            </BrowserRouter >
        </>
    );
};

export default Router;