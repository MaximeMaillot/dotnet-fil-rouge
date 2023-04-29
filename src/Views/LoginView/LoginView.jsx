import React from 'react';
import "./LoginView.css";
import members from "./../../data/test-members.json";
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
    return (
        <div>
            <div className="wraperCreatecompte">
                <div className="createAccount">
                    <p className='para1'>Créez votre compte</p>
                    <h1>Trello</h1>
                    <p className='para2'>Votre login</p>
                    <input id='loginName' type="text" />
                    <p className='para3'>Votre mot de passe</p>
                    <input id='motDePasse' type="text" />
                    <button onClick={() => { connection() }} className='commencer'>Créer mon compte</button>
                </div>
            </div>
        </div>
    );
};


export default LoginView;