import React, {useState,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import FilterResults from 'react-filter-search'
import {startGetProducts,startDeleteProduct,} from '../../actions/billingAction'



const ProductList = (props) => {
    const {handleEdit} = props
    const [search, setSearch] = useState('')

    const dispatch = useDispatch()

    const products = useSelector((state) => {
        return state.bill.products 
    })

    useEffect(() => {
        dispatch(startGetProducts())
    }, [])

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleDelete = (id) => {
		const confirm = window.confirm('Do you want to delete this product')
		if (confirm) {
			dispatch(startDeleteProduct(id))
		}
	}

    return(
        <div>
            <h1> Products </h1>
            <input
                type = "text"
                value = {search}
                onChange = {handleChange}
                placeholder = "search"
            />

            {products.length > 0 ? (
                <div> 
                    <ol>
                        <FilterResults
                            value = {search}
                            data = {products}
                            renderResults = {(result) => {
                                return(
                                    <div>
                                        {result.map((prod) => {
                                            return(
                                                <div>
                                                    <li key = {prod._id} >
                                                    {prod.name} - Rs.{prod.price}
                                                    <button 
                                                        onClick = {() => {
                                                         handleEdit(prod._id)
                                                         }}
                                                     >Edit</button>

                                                <button
                                                    onClick={() => {
                                                        handleDelete(prod._id)
                                                        }}
                                                >Delete</button>
                                                    </li>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            }}
                        />
                    </ol>
                </div>
            ) : (
                <div>
                    <h2> No Products Added </h2>
                </div>
            )}

        </div>
    )
}

export default ProductList