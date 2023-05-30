import React from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { disconnectUser } from '../../redux/slices/webstoreSlice';

const Navbar = () => {
    const currentUser = useSelector(state => state.webstore.currentUser)
    const dispatch = useDispatch()

    return (
        <div className='Navbar'>
            <Link to="/home"><img src="/logo-trallo.jpg" alt="Logo Trallo" className='logo' /></Link>
            <div className='bouton1'>
                <Link to="/projects">Espaces de travail </Link>
            </div>
            {currentUser ?
                <button className='button2' onClick={() => { dispatch(disconnectUser()) }}>Se déconnecter</button> :
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
    );
};

export default Navbar;