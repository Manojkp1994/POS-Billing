import React, {useState,useEffect} from 'react' 
import {useSelector, useDispatch} from "react-redux"
import {startGetCustomerData} from "../../actions/billingAction"
import AddCustomers from "./AddCustomers"
import CustomerList from './CustomersList'


const Customers = (props) => {
    const [toggle, setToggle] = useState(false)
    const customersData = useSelector((state) => {
        return state.bill.customersData
    })

    const dispatch = useDispatch()

   const handleToggle = (value) => {
       setToggle(value)
   } 

   const handleEdit = (id) => {
       handleToggle(true)
       dispatch(startGetCustomerData(id))
   }

    return (
        <div>
           {toggle ? (
               <div>
                   <h1>Edit Customers</h1>
                   <AddCustomers
                        toggle = {toggle}
                        handleToggle = {handleToggle}
                        {...customersData}
                    />
               </div>
           ) : (
               <div>
                   <h1> Add Customers </h1>
                   <AddCustomers />
               </div>
           )}

           <hr/>
           <CustomerList handleEdit = {handleEdit} />
        </div>
    )
}

export default Customers