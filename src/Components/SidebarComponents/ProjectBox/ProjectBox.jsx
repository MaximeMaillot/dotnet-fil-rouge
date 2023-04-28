import React, { useState } from 'react';
import "./ProjectBox.css";
import DescriptionInput from '../../DescriptionInput/DescriptionInput';

const ProjectBox = ({setProjectBoxDisplay}) => {
    const [description, setDescription] = useState("")
    return (
        <div className='ProjectBox'>
            <h3>Création d'un nouveau projet</h3>
            <DescriptionInput description={description} setDescription={setDescription} />
            <div>Liste des membres</div>
            <div><button>Créer</button> <button onClick={() => {setProjectBoxDisplay(false)}}>Annuler</button></div>
        </div>
    );
};

export default ProjectBox;