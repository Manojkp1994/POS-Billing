import React, {useState, useEffect} from 'react' 
import validator from 'validator' 
import {startRegisterUsers} from '../actions/usersAction'
import {useSelector,useDispatch} from 'react-redux'

const Register = (props) => {
    const [ username, setUsername ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ businessName, setBusinessName ] = useState('')
    const [ address, setAddress ] = useState('')
    const [ formErrors, setFormErrors ] = useState({})  // state variable
    const errors = {}  // local variable

    const usersRegister = useSelector((state) => {
        return state.users
    })

    const dispatch = useDispatch()

    const [ isSubmitted, setIsSubmitted ] = useState(false)

    useEffect(() => {
        if(isSubmitted) {
            props.history.push('/login')
        }
    },[usersRegister])

    const handleSubmit = (e) => {
        e.preventDefault()
        runValidation()
 

        if(Object.keys(errors).length === 0){
            const formData = {
                username : username,
                email : email,
                password : password,
                businessName : businessName,
                address : address
            }

           // console.log("form data", formData)
            resetForm()
            setIsSubmitted(true)
            dispatch(startRegisterUsers(formData))
        }
    }

    const runValidation = () => {
        if(validator.isEmpty(username)){
            errors.name = "Enter name"
        } if(!validator.isEmail(email)){
            errors.email = "Enter email"
        }if(validator.isEmpty(password)){
            errors.password = "Enter password"
        }if(validator.isEmpty(businessName)){
            errors.businessName = "Enter business name"
        }if(validator.isEmpty(address)){
            errors.address = "Enter  address"
         }
        setFormErrors(errors)
    }

    const resetForm = () => {
        setUsername('')
        setEmail('')
        setPassword('')
        setBusinessName('')
        setAddress('')
    }

    const handleChange = (e) => {
        if(e.target.name === "username") {
            setUsername(e.target.value)
        } else if (e.target.name === "email") {
            setEmail(e.target.value)
        } else if (e.target.name === "password") {
            setPassword (e.target.value)
        } else if (e.target.name === "businessName") {
            setBusinessName(e.target.value)
        } else if (e.target.name === "address") {
            setAddress(e.target.value)
        }
    }

    return (
        <div>
           <h2> Register with us</h2>
           <form onSubmit={handleSubmit} >
               <input
                    type = "text"
                    value = {username}
                    name = "username"
                    placeholder = "enter your name"
                    onChange = {handleChange}
               />
               {formErrors.name && <span>{formErrors.name}</span>}
               <br/>

               <input
                    type = "text"
                    value = {email}
                    name = "email"
                    placeholder = "enter your email"
                    onChange = {handleChange}
               />
               {formErrors.email && <span>{formErrors.email}</span>}
               <br/>

               <input 
                    type = "password"
                    value = {password}
                    name = "password"
                    placeholder = "enter your password"
                    onChange = {handleChange}
                 /> 
                 {formErrors.password && <span> {formErrors.password} </span>}
                 <br/>

                 <input 
                    type = "text"
                    value = {businessName}
                    name = "businessName"
                    placeholder = "enter your Business Name"
                    onChange = {handleChange}
                 /> 
                 {formErrors.businessName && <span>{formErrors.businessName}</span>}
                 <br/>

                 <textarea
                    value = {address}
                    name = "address"
                    placeholder = "enter your Address"
                    onChange = {handleChange}
                 /> 
                 {formErrors.address && <span>{formErrors.address}</span> }
                 <br/>
                 <input type = "submit" />
           </form>
           <p>alredy registered ? </p>
        </div>
    )
}

export default Register