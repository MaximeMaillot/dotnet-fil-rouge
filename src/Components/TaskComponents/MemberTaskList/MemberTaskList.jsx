import React from 'react';
import './MemberTaskList.css';
import MemberLabel from '../../MemberLabel/MemberLabel';

const MemberTaskList = ({members = []}) => {
    return (
        <>
            <div className='MemberTaskList-members'>{members.map((member) => {
                return <MemberLabel key={member} member={member}/>
            })}</div>
            <button className='MemberTaskList-button'>Modifier membres</button>
        </>
    );
};

export default MemberTaskList;