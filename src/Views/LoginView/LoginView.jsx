import React, { useEffect, useState } from 'react';
import "./LoginView.css";
import { useDispatch } from 'react-redux';
import { connectUser } from '../../redux/slices/userSlice';
import store from "./../../redux/store"
import { useNavigate } from 'react-router';

const LoginView = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        store.subscribe(() => {
            if (store.getState().users.currentUserId !== -1) {
                navigate('/')
            } else {
                console.log("Connection failed")
            }
        })
    })
    return (
        <div>
            <div className="wraperCreatecompte">
                <div className="createAccount">
                    <p className='para1'>Connectez-vous à votre compte</p>
                    <h1>Trello</h1>
                    <p className='para2'>Votre login</p>
                    <input id='loginName' type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} />
                    <p className='para3'>Votre mot de passe</p>
                    <input id='motDePasse' type="text" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    <button onClick={() => { dispatch(connectUser({ username, password })) }} className='commencer'>Me connecter</button>
                </div>
            </div>
        </div>
    );
};


export default LoginView;