import React from 'react';
import "./Navbar.css";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import ProjetView from '../../Views/ProjetView/ProjetView';
import LoginView from '../../Views/LoginView/LoginView';

const Navbar = () => {
    return (
        <div>
            <BrowserRouter>
                <div className='Navbar-navbar'>
                    <button>
                        <Link to="/" >Projet</Link>
                    </button>
                    <button>
                        <Link to="/login">Connexion</Link>
                    </button>
                </div>
                <Routes>
                    <Route path='/' element={<ProjetView />}></Route>
                    <Route path='/connexion' element={<LoginView />}></Route>
                    <Route path='/*' element={<ProjetView />}></Route>
                </Routes>
                <div>
                    <Outlet />
                </div>
                <Footer />
            </BrowserRouter >
        </div >
    );
};

export default Navbar;