import React from 'react';
import "./LoginView.css";



const LoginView = () => {
    return (
        <div>
            <div className="wraperCreatecompte">
                <div className="createAccount">
                <p className='para1'>Créez votre compte</p>
                    <h1>Trello</h1>
                    <p className='para2'>Votre login</p>
                    <input type="text" />
                    <p className='para3'>Votre mot de passe</p>
                    <input type="text" />
                    <button className='commencer'>Créer mon compte</button>
                </div>
            </div>
        </div>
    );
};


export default LoginView;