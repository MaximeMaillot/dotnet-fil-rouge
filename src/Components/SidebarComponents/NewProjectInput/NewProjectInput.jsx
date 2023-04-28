import React, { useState } from 'react';
import './NewProjectInput.css';

const NewProjectInput = ({setCreateProject}) => {
    return (
        <>
            <input type='text' onKeyUp={(event) => {
                if (event.key == "Enter") {
                    setCreateProject(false)
                }
            }} placeholder='Nom de projet'></input>
        </>
    );
};

export default NewProjectInput;