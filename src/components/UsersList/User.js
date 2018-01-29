import React from 'react'

const styles={
    border: '1px solid black',
    margin: 10,
    padding: 10
}

const User = props => (
    <div
        key={props.user.email}
        style={styles}
    >
        {props.user.name.first} {props.user.name.last}
    </div>
)

export default User