import React  from 'react'

import {connect} from 'react-redux'

const App = (props) => (

    <div>{
        props.usersData
        &&
        props.usersData.map(user => (
            <div
                key={user.email}
            >
                {user.name.first} {user.name.last}
            </div>
        ))
    }
    </div>

)

const mapStateToProps = state => ({
    usersData: state.users.usersData
})

export default connect  (
    mapStateToProps
)(App)
