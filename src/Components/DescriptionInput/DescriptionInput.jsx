import React from 'react';
import "./DescriptionInput.css";

const DescriptionInput = ({ description, setDescription }) => {
    return (
        <div>
            <div className='DescriptionWrap'>
                <label className='Description'>Description : </label>
                <textarea className='Description2'
                        value={description}
                        onChange={(event) => { setDescription(event.target.value) }}>
                </textarea>
            </div>
        </div>
    );
};

export default DescriptionInput;