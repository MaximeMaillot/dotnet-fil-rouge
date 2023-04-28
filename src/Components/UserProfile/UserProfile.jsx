import React from 'react';
import "./UserProfile.css";


const UserProfile = () => {
    return (
        <div class='UserProfile'>
        <div class='left'>
            <div class='userLogo'>F</div>
            <p class='operationName'>Content</p>
        </div>
        <div class='middle'>
            <p>firstName</p>
            <p>LastName</p>
            <p>title</p>
            <p>email</p>
            <p>**********</p>
        </div>
        <div class='right'>
            <button>Modifier</button>
            <button>Modifier</button>
            <button>Modifier</button>
            <button>Modifier</button>
            <button>Modifier</button>
        </div>
    </div>
    );
};
export default UserProfile;

