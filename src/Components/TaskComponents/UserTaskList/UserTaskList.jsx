import React from 'react';
import './UserTaskList.css';
import UserLabel from '../../UserLabel/UserLabel';

const UserTaskList = ({users = []}) => {
    return (
        <>
            <div className='UserTaskList-users'>{users.map((user) => {
                console.log(users)
                return <UserLabel key={user} user={user}/>
            })}</div>
            <div className='UserTaskList-button'>Modifier membres</div>
        </>
    );
};

export default UserTaskList;