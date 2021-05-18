import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import FilterResults from "react-filter-search"
import {startGetCustomers, startDeleteCustomer} from "../../actions/billingAction"

const CustomerList = (props) => {
    const {handleEdit} = props 
    const [search, setSearch] = useState('')

    const dispatch = useDispatch()

    const customers = useSelector((state) => {
        return state.bill.customers 
    })

    useEffect(() => {
        dispatch(startGetCustomers())
    }, [])

    const handleChange = (e) => {
        setSearch(e.target.value) 
    }

    const handleDelete = (id) => {
		const confirm = window.confirm('Do you want to delete this customer')
		if (confirm) {
			dispatch(startDeleteCustomer(id))
		}
	}

    return (
        <div>
            <h1>Customers</h1>
            <input
                type = "text"
                value = {search}
                onChange = {handleChange}
                placeholder = "search"
            />
            {customers.length > 0 ? (
            <div>
                <ol>
                    <FilterResults
                        value = {search}
                        data = {customers}
                        renderResults = {(results) => {
                            return (
                                <div>
                                    {results.map((cust) => {
                                        return(
                                            <div>
                                                <li key = {cust._id} >
                                                    {cust.name} - mobile {cust.mobile}
                                                    <button onClick = {() => {
                                                        handleEdit(cust._id)
                                                    }} > Edit </button>

                                                    <button onClick = {() => {
                                                        handleDelete(cust._id)
                                                    }} > Delete </button>
                                                </li>
                                            </div>
                                         )
                                })}
                            </div>
                            )
                        }}
                    />
                </ol>
            </div>) : (
                
            <div>
                <h2> No Customers Added </h2>
            </div>)}

        </div>
    )
}

export default CustomerList