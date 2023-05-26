import React from 'react';
import './UserTaskList.css';
import UserLabel from '../../UserLabel/UserLabel';

const UserTaskList = ({users = []}) => {
    return (
        <>
            <div className='UserTaskList-users'>{users.map((user) => {
                return <UserLabel key={user} user={user}/>
            })}</div>
            <button className='UserTaskList-button'>Modifier membres</button>
        </>
    );
};

export default UserTaskList;