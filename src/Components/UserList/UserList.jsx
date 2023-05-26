import React from 'react';
import "./UserList.css";
import User from '../UserLabel/UserLabel';

const UserList = ({users}) => {
    return (
        <div className='UserList'>
            {users.map((user) => {
                <User key={user.user_id} user={user}/>
            })}
        </div>
    );
};

export default UserList;