import React, { useEffect, useState } from 'react';
import "./LoginView.css";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../redux/slices/webstoreSlice';
import store from "../../redux/store.js"

const LoginView = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        store.subscribe(() => {
            if (store.getState().webstore.currentUser) {
                navigate('/')
            }
        })
    })

    return (
        <div>
            <div className="wraperLoginAccount">
                <div className="loginAccount">
                    <p className='para1'>Connectez-vous à votre compte</p>
                    <h1>Trello</h1>
                    <p className='para2'>Votre login</p>
                    <input id='loginName' type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    <p className='para3'>Votre mot de passe</p>
                    <input id='motDePasse' type="text" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    <button onClick={() => { dispatch(loginUser({ email, password })) }} className='commencer'>Me connecter</button>
                </div>
            </div>
        </div>
    );
};


export default LoginView;