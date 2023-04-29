import React from 'react';
import "./DescriptionInput.css";

const DescriptionInput = ({ description, setDescription }) => {
    let desc = description;
    return (
        <div>
            <label>Déscription
                <input className='DescriptionInput' defaultValue={desc} onChange={(event) => { desc = event.target.value }} onKeyUp={(event) => {
                    if (event.key === "Enter") {
                        setDescription(desc)
                    }
                }}></input>
            </label>
        </div>
    );
};

export default DescriptionInput;