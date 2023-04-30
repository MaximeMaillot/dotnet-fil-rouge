import React, { useEffect, useState } from 'react';
import "./LoginView.css";
import members from "./../../data/test-members.json";
import { useDispatch } from 'react-redux';
import { connectMember } from '../../redux/slices/memberSlice';
import store from "./../../redux/store"
import { useNavigate } from 'react-router';
members = members.members;



function connection() {
    let loginName = document.querySelector('#loginName');
    let motDePasse = document.querySelector('#motDePasse');
    if (loginName.value === "" || motDePasse.value === "") {
        console.log("saisir")
    } else {
        for (let i = 0; i < members.length; i++) {
            if (loginName.value === members[i].name) {
                if (motDePasse.value === members[i].password) {
                    console.log("correct")
                    return;
                }
                else {
                    console.log("wrong password");
                }
            }
        }
    }
}

const LoginView = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        store.subscribe(() => {
            if (store.getState().members.currentMemberId != -1) {
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
                    <button onClick={() => { dispatch(connectMember({ username, password })) }} className='commencer'>Me connecter</button>
                </div>
            </div>
        </div>
    );
};


export default LoginView;