import React from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { disconnectUser } from '../../redux/slices/webStoreSlice';

const Navbar = () => {
    const currentUser = useSelector(state => state.webStore.currentUser)
    const dispatch = useDispatch()

    return (
        <div className='Navbar'>
            <div className='bouton0'>
                <Link to="/"><img src="/logo-trallo-perso.png" alt="Logo Trallo" className='logo' /></Link>
            </div>
            {currentUser ?
                <>
                    <div className='bouton1'>
                        <Link to="/projects">Espaces de travail </Link>
                    </div>
                    <div className='membre'>
                        <Link to="Memberprofil">M</Link>
                    </div>
                    <div className='bouton3' onClick={() => { dispatch(disconnectUser()) }}>Me déconnecter</div>
                </>
                : <>
                    <div className='bouton2'>
                        <Link to="/login">Connection</Link>
                    </div>
                    <div className='bouton3'>
                        <Link to="/signup">Inscription</Link>
                    </div>
                </>
            }
        </div>
    );
};

export default Navbar;