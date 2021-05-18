import React from 'react' 
import {Link, Route, withRouter} from "react-router-dom"

import Home from './Home'
import Login from './Login'
import Register from './Register'
import Profile from './Profile'
import Customers from '../components/Customers/Customers' 
import Billing from './Billing/BillContainer'
import Products from '../components/Products/Products'
import DashBorad from './Dashboard'

const NavBar = (props) => {

    const {userLoggedIn, handleAuth} = props 

    return (
        <div>
            <ul>
                <li><Link to = '/' > Home </Link></li>

                { userLoggedIn ?( 
                    <> 
                    <li><Link to = '/dashboard' >Dashboard</Link></li>
                    <li> <Link to = "/customers" >Customers</Link></li>
                    <li> <Link to = "/products" >Products</Link></li>
                    <li> <Link to = "/billing" >Billing</Link></li>
                    <li> <Link to = "/profile" >Profile</Link></li>
                    <li> <Link to = "/" onClick= {() => {
                        localStorage.removeItem('token')
                        alert("successfully logged out")
                        handleAuth()
                        props.history.push('/')
                    }} >Logout</Link></li>
                     </>
                ) : (
                    <>
                    <li> <Link to = "/register"> Register </Link></li>
                    <li> <Link to = "/login" > login </Link></li>
                    </>
                )}
            </ul>


            <Route path = '/' component={Home} exact = {true} />
            <Route path = '/dashboard' component={DashBorad} exact = {true} />
            <Route path = '/customers' component = {Customers} />
            <Route path = '/products' component = {Products} />
            <Route path = '/billing' component = {Billing} />
            <Route path = '/profile' component = {Profile} />
            <Route path = '/register' component = {Register} />
            <Route path = '/login' render = {(props) => {
                return <Login 
                            {...props}
                            handleAuth = {handleAuth}
                        />
            }} />
        </div>
    )
}

export default withRouter(NavBar)