import React,{useState,useEffect} from 'react'
//import validator from 'validator'
import {useDispatch,useSelector} from 'react-redux'
import {billCustomerData,startGetCustomers} from '../../actions/billingAction'

const BillForm = (props) => {
    const [date, setDate] =useState('')
    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')

    const dispatch = useDispatch()

    const customers = useSelector((state) => {
        return state.bill.customers
    }) 

    useEffect(() => {
        dispatch(startGetCustomers())
    },[])

    const addData = (number) => {
        const customerData = customers.find((ele) => {
            if(number === ele.mobile) {
                return ele
            }
        })
        //console.log('customer Data', customerData)
        return customerData
    }
 
    const handleChange = (e) => {
        if(e.target.name === "date"){
            setDate(e.target.value)
        }else {
            setMobile(e.target.value)
        }
    }

    const handleBlur = () => {
        if(mobile!== ''){
            const data = addData(mobile)
           // console.log(data)
            setName(data.name)
        } else {
            setName('')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = addData(mobile)
        const formData = {
            date : date,
            customers : data._id, ...data 
        }
        console.log( 'form data',formData)
        dispatch(billCustomerData(formData))

        //reset form
        setName('')
        setDate('')
        setMobile('')
    }

    return(
        <div>
            <form onSubmit = {handleSubmit} > 
                <input
                    type = "date"
                    value = {date}
                    name = "date"
                    onChange = {handleChange}
                />

                <input
                    type = "text"
                    value= {name}
                    name = "name"
                    placeholder = "enter customer name"
                />

                <input 
                    type='text'
                    value={mobile}
                    name='mobile'
                    placeholder='enter mobile no'
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <input type = "submit" value = "Add" />             
            </form>
        </div>
    )
}

export default BillForm