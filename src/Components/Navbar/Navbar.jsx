import React from 'react';
import "./Navbar.css";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import ProjectsView from '../../Views/ProjectsView/ProjectsView';
import LoginView from '../../Views/LoginView/LoginView';
import SignupView from '../../Views/SignupView/SignupView';
import MembersView from '../../Views/MembersView/MembersView';
import dataProjects from "../../data/test-projects.json";
import { useState } from 'react';

const Navbar = () => {
    const [currentProject, setCurrentProject] = useState(undefined);

    return (
        <div className='Navbar'>
            <BrowserRouter>
                <div>
                        <Link to="/home"><img src="/logo-trallo.jpg" alt="Logo Trallo" className='logo'/></Link>
                    <button className='bouton1'>
                        <Link to="/projects">Espaces de travail </Link>
                    </button>
                    <button className='bouton2'>
                        <Link to="/login">Se connecter</Link>
                    </button>
                    <button className='bouton2'>
                        <Link to="/signup">Inscription</Link>
                    </button>
                </div>
                <Routes>
                    <Route path='/projects' element={<ProjectsView projects={dataProjects.projects} currentProject={currentProject} setCurrentProject={setCurrentProject}/>}></Route>
                    <Route path='/members' element={<MembersView />}></Route>
                    <Route path='/login' element={<LoginView />}></Route>
                    <Route path='/signup' element={<SignupView />}></Route>
                    <Route path='/*' element={<ProjectsView />}></Route>
                </Routes>
                <div>
                    <Outlet />
                </div>
            </BrowserRouter >
        </div >
    );
};

export default Navbar;