import React from 'react';
import "./SignupView.css";

const SignupView = () => {
    return (
            <div className="wraperCreatecompte">
                <div className="createAccount">
                    <p className='para1'>Inscrivez-vous sur</p>
                    <h1>Trallo</h1>
                    <p className='para2'>Rentrez votre Email :</p>
                    <input type="text" />
                    <p className='para2'>Choisissez votre login :</p>
                    <input type="text" />
                    <p className='para2'>Choisissez votre mot de passe :</p>
                    <input type="text" />
                <div className='commencer'>
                Créer mon compte
                    {/* <button >Me connecter</button> */}
                </div>
                </div>

            </div>
    );
};

export default SignupView;