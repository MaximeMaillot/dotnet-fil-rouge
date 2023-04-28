import React from 'react';
import './MemberLabel.css';

const MemberLabel = ({member, showName = false}) => {
    return (
        <>
            <div className='MemberLabel-background'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Letter_A.svg/1024px-Letter_A.svg.png' alt='letter' /></div>
            {showName ? member : undefined}
        </>
    );
};

export default MemberLabel;