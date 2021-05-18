import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import {startGetCustomers, startGetProducts} from '../../actions/billingAction'

const Invoice = (props) => {
    const {handleToggle} = props
    const dispatch = useDispatch()

    const billData = useSelector((state) => {
        return state.bill.billCustomerData
    })
    console.log('billdata', billData)

    const customer = useSelector((state) => {
        return state.bill.customers 
    })

    const product = useSelector((state) => {
        return state.bill.products
    })

    useEffect(()=>{
        dispatch(startGetProducts())
        dispatch(startGetCustomers())
        
    },[])

    const customerName = customer.find((ele) => {
        if(ele._id === billData.customer){
            return ele
        }
    })

    const lineItems = billData.lineItems 

    return(
        <div>
            <h1>invoice</h1>
            <div class="receipt-content">
                <div class="container bootstrap snippets bootdey">
                    <div class="row">
			            <div class="col-md-12">
				            <div class="invoice-wrapper">
					            <div class="intro">
                                    
                                      Hi <strong>{customerName.name}</strong>, 
                                    <br/>
                                    This is the receipt for a payment of <strong>Rs-{billData.total}</strong> for your works
                                </div>
                                <div class="payment-info">
						            <div class="row">
                                        <div class="col-sm-6">
                                            <span>Invoice No.</span>
                                            <strong>{billData._id}</strong>
                                        </div>
                                        <div class="col-sm-6 text-right">
                                            <span>Payment Date</span>
                                            <strong>{billData.date.slice(0,10)}</strong>
                                        </div>
                                    </div>
                                </div>

                                <div class="line-items">
						{/* <div class="headers clearfix">
							<div class="row">
								<div class="col-xs-4">Description</div>
								<div class="col-xs-3">Quantity</div>
								<div class="col-xs-5 text-right">Amount</div>
							</div>
						</div>
						
                            {lineItems.map((ele)=>{
                                return(
                                <div>
                                    <div class="items">
							        <div class="row item">
                                    {product.map((data)=>{
                                        return (
                                        ele.product === data._id && (
                                        <div class="col-xs-4 desc">
                                         {data.name}   
                                        </div> 
                                         )
                                      )
                                    })}
                                   
								<div class="col-xs-3 qty">
									{ele.quantity}
								</div>
								<div class="col-xs-5 amount text-right">
									{ele.subTotal}
								</div>
                                </div>
                                </div>
						        </div>
                                )
                            })}
								 */}
							
                             <div class="headers clearfix">
							{/* <div class="row">
								<div class="col-xs-4">Description</div>
								<div class="col-xs-3">Quantity</div>
								<div class="col-xs-5 text-right">Amount</div>
							</div> */}
						</div>
						
                            {lineItems.map((ele)=>{
                                return(
                                <div>
                                    <div class="items">
							        <div class="row item">
                                    {product.map((data)=>{
                                        return (
                                        ele.product === data._id && (
                                            <div>
                                        <div class="col-xs-4 desc">
                                        Description - {data.name}  
                                       
                                        </div> 
                                        <div class="col-xs-5 amount text-right">
                                        Price - {data.price} 
                                        </div>
                                        </div>
                                         )
                                      )
                                    })}
                                   
								<div class="col-xs-3 qty">
                                Quantity - {ele.quantity}
								</div>
								<div class="col-xs-5 amount text-right">
								Amount - {ele.subTotal}
								</div>
                                </div>
                                </div>
						        </div>
                                )
                            })}
								 
						
						<div class="total text-right">
							<p class="extra-notes">
								<strong>Extra Notes</strong>
								Please send all items at the same time to shipping address by next week.
								Thanks a lot.
							</p>
							<div class="field">
								Subtotal <span>{billData.total}</span>
							</div>
							<div class="field">
								Shipping <span>0.00</span>
							</div>
							{/* <div class="field">
								Discount <span>4.5%</span>
							</div> */}
							<div class="field grand-total">
								Total <span>{billData.total}</span>
							</div>
						</div>

						<div class="print">
							<a href="#">
								<i class="fa fa-print"></i>
								Print this receipt
							</a>
						</div>
					</div>
				</div>

				<div class="footer">
					Copyright © 2021. pos billing
                            </div>
                            <button onClick = {() => {
                                handleToggle(false)
                            }} >close</button>
                        </div>
                    </div>            
                 </div>
            </div>
        </div>
    )
}

export default Invoice