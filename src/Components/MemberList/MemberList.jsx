import React from 'react';
import "./MemberList.css";
import Member from '../MemberLabel/MemberLabel';

const MemberList = ({members}) => {
    return (
        <div className='MemberList'>
            {members.map((member) => {
                <Member key={member.member_id} member={member}/>
            })}
        </div>
    );
};

export default MemberList;