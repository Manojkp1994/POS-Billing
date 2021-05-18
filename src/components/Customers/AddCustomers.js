import React, {useState} from 'react'
import validator from 'validator'
import { useDispatch} from "react-redux"
import {startAddCustomers, startEditCustomerData} from "../../actions/billingAction"


const AddCustomers = (props) => {
    const {toggle, handleToggle, _id} = props
    const [customerName, setCustomerName] = useState('')
    const [customerMobile, setCustomerMobile] = useState('')
    const [customerEmail, setCustomerEmail] = useState('')
    const [ formErrors, setFormErrors ] = useState({})  // state variable
    const errors = {}  // local variable 

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        runValidation()

        if(Object.keys(errors).length === 0){
            const formData = {
                name : customerName,
                mobile : customerMobile,
                email : customerEmail
            } 
            console.log(formData)
            if(toggle) {
                    dispatch(startEditCustomerData(_id, formData))
                    handleToggle(false)
                } else {
                    dispatch(startAddCustomers(formData))
                
            }
            resetForm()
        }

    }

    const runValidation = () => {
        if(validator.isEmpty(customerName)){
            errors.customerName = "Enter customer name"
        }  else if (!validator.isNumeric(customerMobile)){
            errors.customerMobile = "Enter customer mobile"
        } else if (!validator.isEmail(customerEmail)){
            errors.customerEmail = "Enter customer email"
        }
    }

    const handleChange = (e) => {
        if(e.target.name === 'customerName'){
            setCustomerName(e.target.value)
        } else if (e.target.name === 'customerMobile') {
            setCustomerMobile(e.target.value)
        } else if (e.target.name === "customerEmail"){
            setCustomerEmail(e.target.value)
        }
        setFormErrors(errors)
    }

    const resetForm = (e) => {
        setCustomerName('')
        setCustomerMobile('')
        setCustomerEmail('')
    }

    return(
        <div>
            <form onSubmit={handleSubmit} >
                <input 
                    type = 'text'
                    value = {customerName}
                    name = 'customerName'
                    placeholder = "enter customer name"
                    onChange = {handleChange}
                />
                {formErrors.customerName && <span> {formErrors.customerName} </span>}
                <br/>
                <input 
                    type = 'number'
                    value = {customerMobile}
                    name = 'customerMobile'
                    placeholder = "enter customer mobile no"
                    onChange = {handleChange}
                />
                 {formErrors.customerMobile && <span> {formErrors.customerMobile} </span>}
                <br/>
                <input 
                    type = 'email'
                    value = {customerEmail}
                    name = 'customerEmail'
                    placeholder = "enter customer email"
                    onChange = {handleChange}
                />
                 {formErrors.customerEmail && <span> {formErrors.customerEmail} </span>}
                <br/>
                <input type = "submit" />
            </form>
        </div>
    )
}

export default AddCustomers