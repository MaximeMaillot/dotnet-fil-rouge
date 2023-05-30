import React from 'react';
import "./Navbar.css";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import ProjectsView from '../../Views/ProjectsView/ProjectsView';
import LoginView from '../../Views/LoginView/LoginView';
import SignupView from '../../Views/SignupView/SignupView';
import MembersView from '../../Views/MembersView/MembersView';
import AccueilView from '../../Views/AccueilView/AccueilView';
import dataProjects from "../../data/test-projects.json";
import { useState } from 'react';

function getProjectById(projects, id) {
    let project = []
    if (projects && projects.length > 0) {
        project = projects.filter((project) => {
            return project.project_id == id
        })
    }
    return project.length == 1 ? project[0] : undefined
}

const Navbar = () => {
    const [projects, setProjects] = useState(dataProjects.projects);
    const id = localStorage.getItem("currentProjectId")
    const [currentProject, setCurrentProject] = useState(getProjectById(projects, id));
    const [currentUser, setCurrentUser] = useState('maxime');

    return (
        <div >
            <BrowserRouter>
                <div className='Navbar'>
                    <div className='bouton0'>
                    <Link to="/"><img src="/logo-trallo-perso.png" alt="Logo Trallo" className='logo'/></Link>
                    </div>
                    <div className='bouton1'>
                        <Link to="/projects">Espaces de travail </Link>
                    </div>
                    {currentUser ?  <div className='membre'>
                                        <Link to="/Memberprofil">M</Link>
                                    </div> :
                        <>
                        <div className='bouton2'>
                            <Link to="/login">Se connecter</Link>
                        </div>
                            <div className='bouton3'>
                                <Link to="/signup">Inscription</Link>
                            </div>
                        </>
                        }
                </div>
                <Routes>
                    <Route path='/projects' element={<ProjectsView projects={projects} setProjects={setProjects} currentProject={currentProject} setCurrentProject={setCurrentProject} />}></Route>
                    <Route path='/members' element={<MembersView />}></Route>
                    <Route path='/login' element={<LoginView />}></Route>
                    <Route path='/signup' element={<SignupView />}></Route>
                    <Route path='/*' element={<AccueilView />}></Route>
                </Routes>
                <div>
                    <Outlet />
                </div>
            </BrowserRouter >
        </div >
    );
};

export default Navbar;