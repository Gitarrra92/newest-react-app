const SET_USERS_DATA = 'users/SET_USERS_DATA'

const setUsersData = data => ({
    type: SET_USERS_DATA,
    data
})


const fetchUsersData = () => (dispatch, getState) => {

    fetch('https://randomuse.me/api/?results=10')
        .then(response => response.json())
        .then(data => dispatch(SET_USERS_DATA))
}



const initialState = {
    usersData: null
}



export default (state = initialState, action) => {
    switch(action.type){
        default:
            return state
    }
}