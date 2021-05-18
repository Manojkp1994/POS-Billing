import React, { useEffect } from 'react'
import {useSelector, useDispatch} from "react-redux"
import {startGetBill, startDeleteBill, startGetBillData} from '../../actions/billingAction'

const BillList = (props) => {
    const {handleInvoice} = props 
    const dispatch = useDispatch()

    const billing = useSelector((state) => {
        return state.bill.bills
    })
    console.log("billing", billing)

    const customers = useSelector((state) => {
        return state.bill.customers
    })

    const customerData = useSelector((state) => {
        return state.bill.customersData 
    })
    console.log("customer data", customerData)

    useEffect(() => {
       dispatch(startGetBill()) 
    },[])

    const handleDelete = (id) => {
        const confirm = window.confirm("Are you sure") 
            if(confirm){
                dispatch(startDeleteBill(id))           
        }
    }

    return(
        <div>
            Total no of bills - {billing.length}
            <table border = "1">
                <thead>
                    <tr>
                        <th>Sl.No</th>
                        <th>Customer</th>
                        <th>Total</th>
                        <th></th>
                        <th></th>

                    </tr>
                </thead>
                <tbody>
                    {billing.map((ele,i) => {
                        return <tr key = {ele._id}>
                            <td>{i+1}</td>
                            {customers.map((data) => {
                                return(
                                    data._id === ele.customer && (
                                        <td key = {data._id} >{data.name}</td>
                                    )
                                )
                            })}
                            <td>{ele.total}</td>
                            <td><button onClick = {() => {
                                handleInvoice(ele._id)
                                dispatch(startGetBillData(ele._id))

                            }} >View</button></td>
                            <td><button onClick = {() => {
                                handleDelete(ele._id)
                            }} >Delete</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default BillList