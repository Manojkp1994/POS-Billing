import React, { useEffect } from 'react'
import {useSelector, useDispatch} from "react-redux"
import {removeCartData, getCartItems, getBillCustomerData} from "../../actions/billingAction"


const Cart = (props) =>{
    const dispatch = useDispatch()

    const cart = useSelector((state) => {
        return state.bill.cart 
    })

    const customerData = useSelector((state) => {
        return state.bill.billCustomerData
    })

    useEffect(() => {
        dispatch(getBillCustomerData())
        dispatch( getCartItems())
    }, [])

    const handleRemove = (id) => {
        const confirm = window.confirm("Are you sure")
        if(confirm){
            dispatch(removeCartData(id))
        }
    }
        // console.log(cart)
    return(
        <div>
            {customerData && <h1>{customerData.name}</h1>}

        <ol>
            {cart.map((ele) => {
                return(
                    <li key = {ele.products._id} >
                        {ele.products.name} - {ele.products.price}

                        <button onClick = {() => {
                            handleRemove(ele.products._id)
                        }} > remove </button>
                    </li>
                )
            })}
        </ol>

        </div>
    )
}

export default Cart