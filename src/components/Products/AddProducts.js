import React, {useState} from 'react' 
import validator from 'validator'
import {useDispatch} from "react-redux"
import {startAddProduct, startEditProductData} from "../../actions/billingAction"


const AddProducts = (props) => {
    const { toggle, handleToggle, _id} = props
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [ formErrors, setFormErrors ] = useState({})  // state variable
    const errors = {}  // local variable


    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        runValidation()
 

        if(Object.keys(errors).length === 0){
            const formData = {
                name : productName,
                price : productPrice
            }
            if(toggle) {
                dispatch(startEditProductData(_id, formData))
                handleToggle(false)
            } else {
                dispatch(startAddProduct(formData))
            }
            resetForm()
        }

    }

    const runValidation = () => {
        if(validator.isEmpty(productName)){
            errors.productName = "Enter product name"
        } else if (!validator.isNumeric(productPrice)){
            errors.productPrice = "Enter product price"
        }
    }

    const handleChange = (e) => {
        if(e.target.name === 'productName'){
            setProductName(e.target.value)
        } else if (e.target.name === 'productPrice') {
            setProductPrice(e.target.value)
        }
        setFormErrors(errors)
    }

    const resetForm = (e) => {
        setProductName('')
        setProductPrice('')
    }

    return(
        <div>
            <form onSubmit={handleSubmit} >
                <input 
                    type = 'text'
                    value = {productName}
                    name = 'productName'
                    placeholder = "enter your product"
                    onChange = {handleChange}
                />
                {formErrors.productName && <span> {formErrors.productName} </span>}
                <br/>
                <input 
                    type = 'number'
                    value = {productPrice}
                    name = 'productPrice'
                    placeholder = "enter product price"
                    onChange = {handleChange}
                />
                 {formErrors.productPrice && <span> {formErrors.productPrice} </span>}
                <br/>
                {toggle ? (
                <div>
                    <button type = "submit" >Update</button>
                    <button onClick = {() => {
                        handleToggle(false)
                    }} > cancel </button>
                </div>): (
                <div>
                    <button type = "submit" > Add </button>
                </div>)}
            </form>
        </div>


    )
}

export default AddProducts