import React from 'react';
import "./TaskBoxDescription.css";

const TaskBoxDescription = ({ description, setDescription }) => {
    let desc = description;
    return (
        <label>Déscription
            <input className='TaskBoxDescription' defaultValue={desc} onChange={(event) => {desc = event.target.value}} onKeyUp={(event) => {if (event.key == "Enter") {
                setDescription(desc)
            }}}></input>
        </label>
    );
};

export default TaskBoxDescription;