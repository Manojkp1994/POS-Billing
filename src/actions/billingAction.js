import axios from 'axios'

//Products
export const startGetProducts = () => {
	return (dispatch) => {
		axios.get('http://dct-billing-app.herokuapp.com/api/products', {
				headers: {
					Authorization: localStorage.getItem('token'),
				},
			})
			.then((response) => {
				const result = response.data
				dispatch(getProducts(result))
			})
			.catch((error) => {
				alert(error.message)
			})
	}
}
export const getProducts = (data) => {
	return {
		type: 'GET_PRODUCTS',
		payload: data
	}
}

export const startAddProduct = (formData) => {
    return(dispatch) => {
        axios.post('http://dct-billing-app.herokuapp.com/api/products', formData, {
            headers : {
                Authorization : localStorage.getItem('token')
            }
        })
        .then((response) => {
            const result = response.data 
			console.log(result)

            dispatch(addProduct(result))
            alert("product added successfully")
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}
export const addProduct = (data) => {
	return {
		type: 'ADD_PRODUCTS',
		payload: data
	}
}

export const startGetProductData = (id) => {
	return (dispatch) => {
		axios.get(`http://dct-billing-app.herokuapp.com/api/products/${id}`, {
				headers: {
					Authorization: localStorage.getItem('token'),
				},
			})
			.then((response) => {
				const result = response.data
				dispatch(getProductData(result))
			})
			.catch((error) => {
				alert(error.message)
			})
	}
}
export const getProductData = (data) => {
	return {
		type: 'GET_PRODUCT_DATA',
		payload: data
	}
}

export const startEditProductData = (id, formData) => {
	return (dispatch) => {
		console.log('formdata', formData)
		axios.put(`http://dct-billing-app.herokuapp.com/api/products/${id}`, formData, {
				headers: {
					Authorization: localStorage.getItem('token'),
				},
			})
			.then((response) => {
				const result = response.data
				dispatch(editProductData(result))
				alert('Data updated Succesfully')
			})
			.catch((error) => {
				alert(error.message)
			})
	}
}
export const editProductData = (data) => {
	return {
		type: 'EDIT_PRODUCT_DATA',
		payload: data
	}
}

export const startDeleteProduct = (id) => {
	return (dispatch) => {
		axios
			.delete(`http://dct-billing-app.herokuapp.com/api/products/${id}`, {
				headers: {
					Authorization: localStorage.getItem('token'),
				},
			})
			.then((response) => {
				const result = response.data
				alert('customer deleted succesfully')
				dispatch(deleteProduct(result))
			})
			.catch((error) => {
				alert(error.message)
			})
	}
}
export const deleteProduct = (data) => {
	return {
		type: 'DELETE_PRODUCT',
		payload: data
	}
}


//Customers 
export const startGetCustomers = () => {
	return (dispatch) => {
		axios.get('http://dct-billing-app.herokuapp.com/api/customers', {
				headers: {
					Authorization: localStorage.getItem('token'),
				},
			})
			.then((response) => {
				const result = response.data
				dispatch(getCustomers(result))
			})
			.catch((error) => {
				alert(error.message)
			})
	}
}
export const getCustomers = (data) => {
	return {
		type: 'GET_CUSTOMERS',
		payload: data
	}
}

export const startAddCustomers = (formData) => {
	return (dispatch) => {
		axios.post('http://dct-billing-app.herokuapp.com/api/customers', formData, {
				headers: {
					Authorization: localStorage.getItem('token'),
				},
			})
			.then((response) => {
				const result = response.data
				dispatch(addCustomer(result))
				alert('Customers added succesfully')
			})
			.catch((error) => {
				alert(error.message)
			})
	}
}
export const addCustomer = (data) => {
	return {
		type: 'ADD_CUSTOMERS',
		payload: data
	}
}

export const startGetCustomerData = (id) => {
	return (dispatch) => {
		axios.get(`http://dct-billing-app.herokuapp.com/api/customers/${id}`, {
				headers: {
					Authorization: localStorage.getItem('token'),
				},
			})
			.then((response) => {
				const result = response.data
				dispatch(getCustomerData(result))
			})
			.catch((error) => {
				alert(error.message)
			})
	}
}
export const getCustomerData = (data) => {
	return {
		type: 'GET_CUSTOMER_DATA',
		payload: data
	}
}

export const startEditCustomerData = (id, formData) => {
	return (dispatch) => {
		console.log('formdata', formData)
		axios.put(`http://dct-billing-app.herokuapp.com/api/customers/${id}`, formData, {
				headers: {
					Authorization: localStorage.getItem('token'),
				},
			})
			.then((response) => {
				const result = response.data
				dispatch(editCustomerData(result))
				alert('Data updated Succesfully')
			})
			.catch((error) => {
				alert(error.message)
			})
	}
}
export const editCustomerData = (data) => {
	return {
		type: 'EDIT_CUSTOMER_DATA',
		payload: data
	}
}

export const startDeleteCustomer = (id) => {
	return (dispatch) => {
		axios
			.delete(`http://dct-billing-app.herokuapp.com/api/customers/${id}`, {
				headers: {
					Authorization: localStorage.getItem('token'),
				},
			})
			.then((response) => {
				const result = response.data
				alert('customer deleted succesfully')
				dispatch(deleteCustomer(result))
			})
			.catch((error) => {
				alert(error.message)
			})
	}
}
export const deleteCustomer = (data) => {
	return {
		type: 'DELETE_CUSTOMER',
		payload: data
	}
}

//Bills
export const startGetBill = () => {
	return (dispatch) => {
		axios.get('http://dct-billing-app.herokuapp.com/api/bills', {
				headers: {
					Authorization: localStorage.getItem('token'),
				},
			})
			.then((response) => {
				const result = response.data
				dispatch(getBills(result))
			})
			.catch((error) => {
				alert(error.message)
			})
	}
}
export const getBills = (data) => {
	return {
		type: 'GET_BILL',
		payload: data
	}
}

export const startAddBill=(formBill)=>{
    return(dispatch)=>{
        axios.post('http://dct-billing-app.herokuapp.com/api/bills',formBill,{
            headers : {
                Authorization : localStorage.getItem('token')
            }
        })
        .then((response)=>{
            const result = response.data
            console.log('bill',result)
            dispatch(addBill(result))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
export const addBill = (data) => {
    return {
        type: 'ADD_BILL',
        payload : data
    }
}

export const startGetBillData=(id)=>{
    return(dispatch)=>{
        axios.get(`http://dct-billing-app.herokuapp.com/api/bills/${id}`,{
            headers : {
                Authorization : localStorage.getItem('token')
            }
        })
        .then((response)=>{
            const result=response.data
            console.log('result', result)
            dispatch(getBillData(result))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
export const getBillData=(data)=>{
    return{
        type:'GET_BILLS_DATA',
        payload : data
    }
}

export const startDeleteBill=(id)=>{
    return(dispatch)=>{
        axios.delete(`http://dct-billing-app.herokuapp.com/api/bills/${id}`,{
            headers : {
                Authorization : localStorage.getItem('token')
            }
        })
        .then((response)=>{
            const result = response.data
            // console.log(data)
            dispatch(deleteBill(result))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
export const deleteBill=(data)=>{
    return{
        type : 'DELETE_BILL',
        payload :data
    }
}

//Bill Customer Data

export const billCustomerData=(data)=>{
    return {
        type : 'BILL_CUSTOMER_DATA',
        payload : data
    }
}

// Add to Cart

export const addToCart = (data) => {
    return {
        type : 'ADD_TO_CART',
        payload : data
    }
}

export const getCartItems = () => {
    return {
        type : 'GET_CART_ITEMS'
    }
}

export const getBillCustomerData = () => {
    return {
        type : 'GET_BILLS_CUSTOMER_DATA'
    }
}

export const removeCartData = (id) => {
    return {
        type : 'REMOVE_CART_DATA',
        payload : id
    }
}

export const clearCart = () => {
    return {
        type : 'CLEAR_CART'
    }
}

export const clearBillCustomerData = () => {
    return {
        type : 'CLEAR_BILL_CUSTOMER_DATA'
    }
}