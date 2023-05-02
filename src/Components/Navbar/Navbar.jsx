import React from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { disconnectMember } from '../../redux/slices/memberSlice';

const Navbar = () => {
    const members = useSelector(state => state.members)
    const dispatch = useDispatch()

    return (
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
    );
};

export default Navbar;