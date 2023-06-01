import React, { useEffect, useState } from 'react';
import "./LoginView.css";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../redux/slices/webStoreSlice';
import store from "../../redux/store.js"

const LoginView = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        store.subscribe(() => {
            if (store.getState().webStore.currentUser) {
                navigate('/projects')
            }
        })
    })

    return (
        <div>
            <div className="wraperCreateAccount">
                <div className="createAccount">
                    <p className='para1'>Connectez-vous à votre compte</p>
                    <h1>Trallo</h1>
                    <p className='para2'>Votre email</p>
                    <input id='loginName' type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    <p className='para2'>Votre mot de passe</p>
                    <input id='motDePasse' type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    <div onClick={() => { dispatch(loginUser({ email, password })) }} className='commencer'>Me connecter</div>
                </div>
            </div>
        </div>

    );
};


export default LoginView;