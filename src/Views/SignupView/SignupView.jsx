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
            <div className="wraperCreateAccount">
                <div className="createAccount">
                    <p className='para1'>Inscrivez-vous sur</p>
                    <h1>Trallo</h1>
                    <p className='para2'>Rentrez votre Email :</p>
                    <input type="text" id='email' value={email} onChange={(e) => { setEmail(e.target.value) }}/>
                    <p className='para2'>Choisissez votre login :</p>
                    <input type='text' id='name' value={name} onChange={(e) => { setName(e.target.value) }}/>
                    <p className='para2'>Choisissez votre mot de passe :</p>
                    <input type="text" id='password' value={password} onChange={(e) => { setPassword(e.target.value) }}/>
                    <div className='commencer' onClick={() => { dispatch(registerUser({ email, password, name })) }}>
                        Créer mon compte
                </div>
                </div>

            </div>
    );
};

export default SignupView;