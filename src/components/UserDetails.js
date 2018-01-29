import React from 'react'
import {withRouter} from 'react-router-dom'

const UserDetails = props => {
    const arrayWithUsers = props.usersData || []
    const currentUserEmail = props.match.params.email
    const currentUserData = arrayWithUsers.find(
        user => user.email === currentUserEmail
    )

    return (
        <div>
            {
                currentUserData ?
                    <div>
                        <div>
                            <img src={currentUserData.picture.medium} alt=""/>
                        </div>
                        <div>
                            {currentUserData.name.first}
                        </div>
                        <div>
                            {currentUserData.name.last}
                        </div>
                        <div>
                            {currentUserData.email}
                        </div>
                    </div>
                    :
                    'Nie ma takiego użytkownika w bazie!'
            }
        </div>
    )
}

export default withRouter(UserDetails)