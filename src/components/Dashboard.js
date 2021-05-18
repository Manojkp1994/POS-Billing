import React,{useEffect} from 'react' 
import {useSelector, useDispatch} from 'react-redux'
import {startGetCustomers, startGetProducts} from '../actions/billingAction'

const DashBorad = (props) => {

    const  bill = useSelector((state) => {
        return state.bill
    })
    const dispatch = useDispatch()
    useEffect (() => {
        dispatch(startGetProducts())
        dispatch(startGetCustomers())
    },[])

    return(
        <div>
            <h1> Dashborad </h1> 
            <h2>Total Products - {bill.products.length}</h2>
            <h2>Total Customers - {bill.customers.length}</h2>
        </div>
    )
}

export default DashBorad