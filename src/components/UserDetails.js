import React from 'react'



const UserDetails = props => (
    <div>
        {props.match.params.email}
    </div>
)

export default UserDetails