import React from 'react';
import "./Navbar.css";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import ProjectsView from '../../Views/ProjectsView/ProjectsView';
import LoginView from '../../Views/LoginView/LoginView';
import SignupView from '../../Views/SignupView/SignupView';
import MembersView from '../../Views/MembersView/MembersView';
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

    return (
        <div className='Navbar'>
            <BrowserRouter>
                <div>
                    <button>
                        <Link to="/projects" >Projets</Link>
                    </button>
                    <button>
                        <Link to="/members">Membres</Link>
                    </button>
                    <button>
                        <Link to="/login">Se connecter</Link>
                    </button>
                    <button>
                        <Link to="/signup">Inscription</Link>
                    </button>
                </div>
                <Routes>
                    <Route path='/projects' element={<ProjectsView projects={projects} setProjects={setProjects} currentProject={currentProject} setCurrentProject={setCurrentProject} />}></Route>
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