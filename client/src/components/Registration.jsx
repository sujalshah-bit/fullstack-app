import React from 'react'
import {BsFillPersonFill, BsPersonWorkspace} from 'react-icons/bs'
import {AiTwotoneMail, AiTwotonePhone} from 'react-icons/ai'
import {RiLockPasswordFill} from 'react-icons/ri'
import {GiConfirmed} from 'react-icons/gi'
const Registration = () => {
  return (
    <>
        <section className="registration">
            <div className="box">
                <form action="">
                    <h1 className='form_head'>SignUp</h1>
                    <div className="sub_box">
                        <label htmlFor="Name"><BsFillPersonFill/></label>
                        <input type="text" id='Name' placeholder='Your name' autocomplete="off" />
                    </div>
                    <div className="sub_box">
                        <label htmlFor="Email"><AiTwotoneMail /></label>
                        <input type="email" id='Email' placeholder='Your Email' />
                    </div>
                    <div className="sub_box">
                        <label htmlFor="Phone"><AiTwotonePhone /></label>
                        <input type="number" id='Phone' placeholder='Mobile Number' />
                    </div>
                    <div className="sub_box">
                        <label htmlFor="job"><BsPersonWorkspace /></label>
                        <input type="text" id='job' placeholder='Your Profession' />
                    </div>
                    <div className="sub_box">
                        <label htmlFor="Password"><RiLockPasswordFill /></label>
                        <input type="password" id='Password' placeholder='Password' />
                    </div>
                    <div className="sub_box">
                        <label htmlFor="cPassword"><GiConfirmed /></label>
                        <input type="password" id='cPassword' placeholder='Confirm Password' />
                    </div>
                    <button type="submit">SignUp</button>
                </form>

            </div>
        </section>
    </>
  )
}

export default Registration