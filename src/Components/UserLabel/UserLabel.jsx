import React from 'react';
import './UserLabel.css';

const UserLabel = ({user, showName = false}) => {
    return (
        <>
            <div className='UserLabel-background'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Letter_A.svg/1024px-Letter_A.svg.png' alt='letter' /></div>
            {showName ? user : undefined}
        </>
    );
};

export default UserLabel;