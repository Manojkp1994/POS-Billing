import React,{useEffect, useState} from 'react' 
import {useSelector,useDispatch} from 'react-redux'
import BillForm from './BillForm'
import BillProduct from './BillProduct'
import Cart from './Cart'
import GenerateBill from './GenerateBill'
import BillList from './BillList'
import {startGetBill, startGetBillData} from '../../actions/billingAction'
import Invoice from './Invoice'

 
const BillingContainer = (props) => {
    const [toggle, setToggle] = useState(false)
    const dispatch = useDispatch()

  const cart = useSelector((state) => {
        return state.bill.cart
  })
 // console.log("cart items", cart)

  const billData = useSelector((state) => {
        return state.bill.billCustomerData
    })
    console.log('bill data', billData)

  useEffect(() => {
        dispatch(startGetBill())
    },[])

  const handleToggle=(value)=>{
    setToggle(value)
    }

    const handleInvoice=(id)=>{
        setToggle(true)
        dispatch(startGetBillData(id))
    }
  

    return (
        <div>
           <h1> Billing Section</h1>
           <hr/>
           <BillForm/>
           <BillProduct/>

           {cart.length > 0  ? (
               <div>
                   <Cart/>
                   <GenerateBill/>
                   
               </div>
           ) : (
               <div>
                   <h2>Cart Items</h2> 
                   <Cart/>
               </div>
           )} 

           <hr/>
            <div>
                <BillList handleInvoice={handleInvoice}  />
             {toggle && Object.keys(billData).length > 0 &&  <Invoice handleToggle = {handleToggle} /> }
               
            </div>

        </div>
    )
}

export default BillingContainer