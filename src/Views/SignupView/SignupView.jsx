import React, {useState, useEffect} from 'react';
import "./SignupView.css";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../redux/slices/webstoreSlice';
import store from "../../redux/store.js"

const SignupView = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
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
            <div className="wraperCreateAccount">
                <div className="createAccount">
                    <p className='para1'>Inscription</p>
                    <h1>Trello</h1>
                    <p>Votre nom</p>
                    <input type='text' id='name' value={name} onChange={(e) => { setName(e.target.value) }}/>
                    <p className='para2'>Votre email</p>
                    <input type="text" id='email' value={email} onChange={(e) => { setEmail(e.target.value) }}/>
                    <p className='para3'>Votre mot de passe</p>
                    <input type="text" id='password' value={password} onChange={(e) => { setPassword(e.target.value) }}/>
                    <button className='commencer' onClick={() => { dispatch(registerUser({ email, password, name })) }}>S'inscrire</button>
                </div>
            </div>
        </div>
    );
};

export default SignupView;