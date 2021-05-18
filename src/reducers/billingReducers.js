const billingInitialState = {
    products : [],
    customers : [],
    customersData : {},
    productsData : {},
    bills : [],
	billCustomerData : {},
	cart : [],
	addBillData : {}
}

const billingReducer = (state = billingInitialState, action) => {
    switch (action.type)  {
        //Product
        case 'GET_PRODUCTS': {
			return { ...state, products: [...action.payload] }
		}
        case "ADD_PRODUCTS" : {
            return {...state, products : [...state.products,action.payload]}
        }
        case 'GET_PRODUCT_DATA':{
            return {...state, productsData : action.payload }
        }
        case 'EDIT_PRODUCT_DATA': {
			return {
				...state,
				products: state.products.map((prod) => {
					if (prod._id === action.payload._id) {
						return { ...prod, ...action.payload }
					} else {
						return { ...prod }
					}
				})
			}
		}

		case 'DELETE_PRODUCT': {
			return {
				...state,
				products: state.products.filter((prod) => {
					return prod._id !== action.payload._id
				})
			}
		}

        //Customer
        case 'GET_CUSTOMERS': {
			return { ...state, customers: [...action.payload] }
		}
        case "ADD_CUSTOMERS" : {
            return { ...state, customers: [...state.customers, action.payload] }
        }
        case 'GET_CUSTOMER_DATA': {
			return { ...state, customerData: action.payload }
		}
		case 'EDIT_CUSTOMER_DATA': {
			return {
				...state,
				customers: state.customers.map((cust) => {
					if (cust._id === action.payload._id) {
						return { ...cust, ...action.payload }
					} else {
						return { ...cust }
					}
				})
			}
		}
		case 'DELETE_CUSTOMER': {
			return {
				...state,
				customers: state.customers.filter((cust) => {
					return cust._id !== action.payload._id
				})
			}
		}

		//Bills
		case 'GET_BILL' : {
			return { ...state, bills: [...action.payload] }
			
		}
		case "ADD_BILL" : {
			return {...state, bills: [...state.bills, action.payload]}
		}

		case 'GET_BILLS_DATA' : {
            return {...state, billCustomerData : action.payload }
        }
		case "DELETE_BILL" : {
			return {
				...state,
				bills : state.bills.filter((ele) => {
					return ele._id !== action.payload._id
				})
			}
		}


		// For Billing Customer Data

		case "BILL_CUSTOMER_DATA" : {
			return {...state, billCustomerData : {...action.payload}}
		}
		// case 'GET_BILLS_DATA' : {
        //     return {...state, billCustomerData : {...action.payload} }
        // }

        case 'CLEAR_BILL_CUSTOMER_DATA' :{
            return {...state , billCustomerData :{} }
        }


		// For Cart Item 

		case 'ADD_TO_CART' : {
            console.log('payload',action.payload)
            return {...state, cart: [...state.cart, action.payload]}
        }

		case 'GET_CART_ITEMS' :{
            return {...state , cart : [...state.cart] }
        }

		case 'REMOVE_CART_DATA' : {
            return {
                ...state,
                cart : state.cart.filter((ele)=>{
                    return ele.products._id !== action.payload
                })
            }
        }

		case 'CLEAR_CART' : {
            return {...state, cart : [] }
        }

		// default
        default : {
            return state
        }
    }   
}

export default billingReducer