const usersInitialState = []

const usersReducer = (state = usersInitialState, action) => {
    switch(action.type) {
        case "REG_USERS" : {
            return [{...action.payload}]
        }
        case "LOGIN_USERS" : {
            return [{...action.payload}]
        }
        case "PROFILE_USERS" : {
            return [ {...action.payload}]
        }

        default : {
            return [...state]
        }
    }
}

export default usersReducer