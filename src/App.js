
import React from 'react'
import UsersList from './components/UsersList'

import {connect} from 'react-redux'

const App = (props) => (
    <div>
        <UsersList usersData={props.usersData}/>
    </div>
)

const mapStateToProps = state => ({
    usersData: state.users.usersData
})

export default connect(
    mapStateToProps
)(App)