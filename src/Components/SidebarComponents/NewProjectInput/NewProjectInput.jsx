import React from 'react';
import './NewProjectInput.css';

const NewProjectInput = ({ setCreateProject }) => {
    return (
        <>
            <input className ='inputNewProject' type='text' onKeyUp={(event) => {
                if (event.key === "Enter") {
                    setCreateProject(false)
                }
            }} placeholder='Nom de projet'></input>
        </>
    );
};

export default NewProjectInput;