import React, {useState, useEffect} from 'react' 
import validator from 'validator'
import {useSelector, useDispatch} from 'react-redux'
import {startLoginUsers} from '../actions/usersAction'


const Login = (props) => {
    const [email , setEmail ] = useState('')
    const [password , setPassword ] = useState('') 
    const [formErrors, setFormErrors ] = useState({}) //state variable 
    const errors = {} // local variable

    const loginUsers = useSelector((state) => {
        return state.users 
    })

    const dispatch = useDispatch()

    const  [ isSubmitted, setIsSubmitted ] = useState(false) // state variable to re-diresct users to another page via props value

    useEffect(() => {
        if(isSubmitted){
            props.handleAuth()
            props.history.push('/dashboard')
        }
    },[loginUsers])

    const handleSubmit = (e) => {
        e.preventDefault()
        runValidation()

        if(Object.keys(errors).length === 0){
            const formData = {
                email : email,
                password : password
            }
           // console.log("form data", formData) 
            resetForm()
            setIsSubmitted(true)
            dispatch(startLoginUsers(formData))
            
        }
        
    }

    const runValidation = () => {
        if(!validator.isEmail(email)) {
            errors.email = "Enter email"
        } if(validator.isEmpty(password)) {
            errors.password = "Enter password"
        }
        setFormErrors(errors)
    } 

    const resetForm = () => {
        setEmail('')
        setPassword('')
    }
        
    const handleChange = (e) => {
        if (e.target.name === "email") {
            setEmail(e.target.value)
        } else if (e.target.name === "password") {
            setPassword (e.target.value)
        }
    }

    return (
        <div>
           <h3> Login </h3>
           <form onSubmit = {handleSubmit} >
                <input 
                    type = "text"
                    value = {email}
                    name = "email"
                    placeholder = "enter email"                
                    onChange = {handleChange}
                 /> 
                 {formErrors.email && <span> {formErrors.email} </span> }
                  <br/>

                 <input 
                    type = "password"
                    value = {password}
                    name = "password"
                    placeholder = "enter password"
                    onChange = {handleChange} 
                /> 
                 {formErrors.password && <span> {formErrors.password} </span> }
                  <br/>

                <input type = "submit" /> 
            </form>
            <p> not registered ? </p>
        </div>
    )
}

export default Login