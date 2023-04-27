import React from 'react';
import Member from "./MemberLabel.css";

const MemberLabel = ({member}) => {
    return (
        <div className='MemberLabel'>
            nom : {member.name}
        </div>
    );
};

export default MemberLabel;