import React from 'react'
import User from './User'

const UsersList = props => (
    <div>
        {
            props.usersData // if this is falsy it will be returned!
            &&
            props.usersData.map(user => <User user={user}/>)
        }
    </div>
)

export default UsersList