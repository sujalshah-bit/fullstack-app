import React from 'react'
import {AiTwotoneMail} from 'react-icons/ai'
import {RiLockPasswordFill} from 'react-icons/ri'
const Login = () => {
  return (
    <>
        <section className="login">
            <div className="log_box">
                <form action="">
                    <h1>Log In</h1>
                    <div className="sub_box">
                        <label htmlFor="Email"><AiTwotoneMail /></label>
                        <input type="email" id='Email' placeholder='Your Email' />
                    </div>
                    <div className="sub_box">
                        <label htmlFor="Password"><RiLockPasswordFill /></label>
                        <input type="password" id='Password' placeholder='Password' />
                    </div>
                    <button className='log_btn' type="submit">SignUp</button>
                </form>
            </div>
        </section>
    </>
  )
}

export default Login