import React,{useEffect} from 'react' 
import {useSelector, useDispatch} from 'react-redux'
import {startProfileUser} from '../actions/usersAction'

const Profile = (props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startProfileUser())
    },[])

    const profileUser = useSelector((state) => {
        return state.users
    })

    //console.log(profileUser)
    const userInfo = profileUser.find((ele) => ele)

    return (
        <div>
           <h3> Users Profile </h3>
           <p>Username - {userInfo.username}</p>
           <p>Email - {userInfo.email}</p>
           <p>Business Name - {userInfo.businessName}</p>
           <p>Business Address - {userInfo.address}</p>
           <p></p>
        </div>
    )
}

export default Profile