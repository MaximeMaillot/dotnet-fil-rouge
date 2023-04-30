import React from 'react';
import "./Navbar.css";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import ProjectsView from '../../Views/ProjectsView/ProjectsView';
import LoginView from '../../Views/LoginView/LoginView';
import SignupView from '../../Views/SignupView/SignupView';
import MembersView from '../../Views/MembersView/MembersView';
import { useDispatch, useSelector } from 'react-redux';
import { disconnectMember } from '../../redux/slices/memberSlice';

const Navbar = () => {
    const projects = useSelector(state => state.projects)
    const members = useSelector(state => state.members)
    const dispatch = useDispatch()

    return (
        <div >
            <BrowserRouter>
                <div className='Navbar'>
                    <Link to="/home"><img src="/logo-trallo.jpg" alt="Logo Trallo" className='logo' /></Link>
                    <div className='bouton1'>
                        <Link to="/projects">Espaces de travail </Link>
                    </div>
                    {members.currentMemberId === -1 ?
                        <>
                            <div className='bouton2'>
                                <Link to="/login">Se connecter</Link>
                            </div>
                            <div className='bouton3'>
                                <Link to="/signup">Inscription</Link>
                            </div>
                        </>
                        : <button className='button2' onClick={() => { dispatch(disconnectMember()) }}>Se déconnecter</button>
                    }
                </div>
                <Routes>
                    <Route path='/projects' element={<ProjectsView projects={projects} />}></Route>
                    <Route path='/members' element={<MembersView />}></Route>
                    <Route path='/login' element={<LoginView />}></Route>
                    <Route path='/signup' element={<SignupView />}></Route>
                    <Route path='/*' element={<ProjectsView projects={projects} />}></Route>
                </Routes>
                <div>
                    <Outlet />
                </div>
            </BrowserRouter >
        </div >
    );
};

export default Navbar;