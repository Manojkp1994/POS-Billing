import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {startGetProductData} from "../../actions/billingAction"
import AddProducts from "./AddProducts"
import ProductList from "./ProductList"

const Product = (props) => {
    const [toggle, setToggle] = useState(false)
    const productsData = useSelector((state) => {
        return state.bill.productsData
    })
    const dispatch = useDispatch()


    const handleToggle = (value) => {
        setToggle(value)
    }

    const handleEdit = (id) => {
        handleToggle(true)
        dispatch(startGetProductData(id))
    }

    return(
        <div>
            {toggle ? (
				<div>
					<h1>Edit Product</h1>
					<AddProducts
						toggle={toggle}
						handleToggle={handleToggle}
						{...productsData}
					/>
				</div>
			) : (
				<div>
					<h1>Add Products</h1>
					<AddProducts />
				</div>
			)}

			<hr />
			<ProductList handleEdit={handleEdit} />
        </div>
    )
}

export default Product