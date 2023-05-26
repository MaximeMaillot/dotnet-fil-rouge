import React from 'react';
import "./Router.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import ProjectsView from '../../Views/ProjectsView/ProjectsView';
import LoginView from '../../Views/LoginView/LoginView';
import SignupView from '../../Views/SignupView/SignupView';
import UsersView from '../../Views/UsersView/UsersView';
import { useSelector } from 'react-redux';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Router = () => {
    const projects = useSelector(state => state.projects.projects)
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/projects' element={<ProjectsView projects={projects} />}></Route>
                    <Route path='/users' element={<UsersView />}></Route>
                    <Route path='/login' element={<LoginView />}></Route>
                    <Route path='/signup' element={<SignupView />}></Route>
                    <Route path='/*' element={<ProjectsView projects={projects} />}></Route>
                </Routes>
                <Outlet />
                <Footer />
            </BrowserRouter >
        </>
    );
};

export default Router;