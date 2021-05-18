import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {addToCart} from '../../actions/billingAction'


const BillProduct = (props) => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')


    const dispatch = useDispatch()

    const products = useSelector((state) => {
        return state.bill.products
    })

    const addProduct = (pName) => {
        const productData = products.find((ele) => {
            if(pName === ele.name){
                return ele
            }
        })
        //console.log(productData)
        return productData
    }

    const handleChange = (e) => {
        if(e.target.name === 'name'){
            setName(e.target.value)
        } else {
            setQuantity(e.target.value)
        }
    }

    const handleBlur = () => {
        if(name !== ''){
            const finalData = addProduct(name)
            setPrice(finalData.price)
        } else {
            setPrice('')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const finalData = addProduct(name)
        console.log('final data',finalData)

       const formData = {
           products : finalData,
           quantity : quantity
       }
       console.log('formData', formData)

       dispatch(addToCart(formData))

       // reset form
       setPrice('')
       setQuantity('')
       setName('')
       
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type = "text"
                    name = 'name'
                    value = {name}
                    placeholder = 'product name'
                    onChange = {handleChange}
                    onBlur = {handleBlur}
                />
                 <input 
                    type='text'
                    name='quantity'
                    value={quantity}
                    placeholder='enter quantity'
                    onChange={handleChange}
                    onBlur={()=>{
                                const total = price*quantity
                                setPrice(total)
                         }}
                />
            
                 <input 
                    type='text'
                    value={price}
                    placeholder='price'
                    
                />
                <input 
                    type='submit'
                    value='Add to Cart'
                />

            </form>
        </div>
    )
}

export default BillProduct