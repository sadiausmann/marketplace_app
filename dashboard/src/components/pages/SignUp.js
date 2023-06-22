import React from 'react'
import { Link } from "react-router-dom";


function SignUp () {
    return (
        <div className='sign-up'>
            <h1>Sign Up</h1>
            <form action="">
                <input required type="text" placeholder='Username' />
                <input required type="email" placeholder='Email' />
                <input required type="password" placeholder='Password' />
                <button>Sign up</button>
                <span>Do you have an account? <Link to="/login">Sign Up</Link></span>
            </form>
        </div>
        
    )
}

export default SignUp