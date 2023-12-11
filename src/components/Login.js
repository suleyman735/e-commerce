import React,{useState} from 'react'
import './Login.css'
import { Link , useHistory} from 'react-router-dom'
// import { StorefrontIcon } from '@mui/icons-material'



function Login() {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

  return (
    <div className='login'>
        <Link to='/' style={{textDecoration:"none"}}>
            {/* <StorefrontIcon className="login__logoImage" fontSize="large" /> */}
            <h2 className='login__logoTitle'>eShop</h2>
        </Link>
        <div className='login__container'>
            <h1>Sign - in</h1>

            <form>
                <h5>
                    Email
                </h5>
                <input type='text' value={email} onChange={e=>setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type='password' value={password} onChange={e=>setPassword(e.target.value)}/>
                <button type='submit' className='login__signInButton'> Sign-in</button>
            </form>
            <p>
                By signin- in you agree to the e shop website condition of use & sale
            </p>
            <button className='login_registerButton'>Create your eShop Account</button>
        </div>
    </div>
  )
}

export default Login