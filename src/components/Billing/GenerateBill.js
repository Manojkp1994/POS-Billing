import React from "react"
import {useSelector, useDispatch} from 'react-redux'
import {startAddBill, clearBillCustomerData, clearCart} from '../../actions/billingAction'


const GenerateBill = () => {
    const dispatch = useDispatch()

    const cart = useSelector((state) => {
        return state.bill.cart 
    })
    //console.log("cart", cart)

    const customerData = useSelector((state) => {
        return state.bill.billCustomerData
    })

    const handleClick = (data = customerData, items = cart) => {
        const formData = {
            date : data.date,
            customer : data.customers,
            lineItems : items.map((ele) => {
                return {
                    product : ele.products._id,
                    quantity : ele.quantity 
                }
            })
        }
       // console.log('formData', formData)
       dispatch(startAddBill(formData))
       dispatch(clearBillCustomerData())
       dispatch(clearCart())
    }

    return(
        <div>
            <button onClick = {() => {
                handleClick(customerData,cart)
            }} > Generate Bill </button>
        </div>
    )
}

export default GenerateBill 