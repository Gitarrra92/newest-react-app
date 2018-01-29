import React, { Component } from 'react';

import {connect} from 'react-redux'



const App = () => (

    <div>App</div>

)

const mapStateToProps = state => ({

    usersData: state.users.usersData
})




export default connect  (
    mapStateToProps

)(App)
