const SET_USERS_DATA = 'users/SET_USERS_DATA'

const setUsersData = data => ({
    type: SET_USERS_DATA,
    data
})


export const fetchUsersData = (numberOfUsers) => (dispatch, getState) => {
    fetch('https://randomuser.me/api/?nat=gb&results=' + numberOfUsers)
        .then(response => response.json())
        .then(data => dispatch(setUsersData(data.results)))
}

const initialState = {
    usersData: null
}

export default (state = initialState, action) => {
    switch(action.type){
        case SET_USERS_DATA:
            return{
                ...state,
                usersData: action.data
            }
        default:
            return state
    }
}