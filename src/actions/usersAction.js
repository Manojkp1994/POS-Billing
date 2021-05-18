import axios from 'axios'

export const startRegisterUsers = (formData) => {
    return(dispatch) => {
        axios.post('http://dct-billing-app.herokuapp.com/api/users/register', formData)
        .then((response) => {
            const result = response.data
            //console.log(result)
            if(result.hasOwnProperty('errors')) {
                alert (result.errors)
            } else {
                alert('successfully created an account')
                dispatch(registerUsers(result))
            }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
    
}
export const registerUsers = (usersData) => {
    return {
        type : "REG_USERS",
        payload : usersData
    }
 }

 export const startLoginUsers = (formData) => {
     return(dispatch) => {
         axios.post('http://dct-billing-app.herokuapp.com/api/users/login', formData)
            .then((response) => {
                const result = response.data
                if(result.hasOwnProperty('errors')){ //Object.keys(result).includes('errors')
                    alert(result.errors)
                } else {
                    alert('Successfully loggedin')
                    localStorage.setItem('token',`Bearer ${result.token}`) 
                    dispatch(loginUsers(result))              
                }
            })
            .catch((err) => {
                alert(err.message)
            })

     }
 }
 export const loginUsers = (usersData) => {
    return {
        type : "LOGIN_USERS",
        payload : usersData
    }
 }

 export const startProfileUser = () => {
     return (dispatch) => {
         axios.get('http://dct-billing-app.herokuapp.com/api/users/account', {
             headers : {
                Authorization : localStorage.getItem("token")
             }
         })
         .then((response) => {
             const result = response.data 
             dispatch(profileUsers(result))
         })
         .catch((err) => {
             alert(err.message)
         })
     }
 }
 export const profileUsers = (usersData) => {
     return {
         type : "PROFILE_USERS",
         payload : usersData
     }
 }