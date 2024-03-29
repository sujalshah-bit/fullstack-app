import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import {BsFillPersonFill, BsPersonWorkspace} from 'react-icons/bs'
import {AiTwotoneMail, AiTwotonePhone} from 'react-icons/ai'
import {RiLockPasswordFill} from 'react-icons/ri'
import {GiConfirmed} from 'react-icons/gi'
const Registration = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        name:'', email:'', Phone:0, Work:'', Password:'', cPassword:''
    })
    let name, value;
    const handleChange =(e)=>{
        e.preventDefault()
        name = e.target.name
        value = e.target.value
        setUser({...user, [name]: value })
    }
    const PostData = async (e) =>{
        e.preventDefault()
        const{ name, email, Phone, Work, Password, cPassword} = user
       const res = await fetch('/register',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({
                name, email, Phone, Work, Password, cPassword
            })
        })
        const data = await res.json()
        if (data.status === 422 || !data) {
            window.alert('Invalid registration')
          console.log('Invalid Registration');  
        }else{
            console.log('Successfully Registered');
            navigate('/login')
        }
    }
  return (
    <>
        <section className="registration">
            <div className="box">
                <form method='POST' >
                    <h1 className='form_head'>SignUp</h1>
                    <div className="sub_box">
                        <label htmlFor="Name"><BsFillPersonFill/></label>
                        <input onChange={handleChange} type="text" value={user.name} id='Name' name = 'name' placeholder='Your name' autoComplete="off" />
                    </div>
                    <div className="sub_box">
                        <label htmlFor="Email"><AiTwotoneMail /></label>
                        <input onChange={handleChange} type="email" value={user.email} id='Email' name = 'email' placeholder='Your Email' />
                    </div>
                    <div className="sub_box">
                        <label htmlFor="Phone"><AiTwotonePhone /></label>
                        <input onChange={handleChange} type="number" value={user.Phone} id='Phone' name = 'Phone' placeholder='Mobile Number' />
                    </div>
                    <div className="sub_box">
                        <label htmlFor="job"><BsPersonWorkspace /></label>
                        <input onChange={handleChange} type="text" value={user.Work} id='job' name = 'Work' placeholder='Your Profession' />
                    </div>
                    <div className="sub_box">
                        <label htmlFor="Password"><RiLockPasswordFill /></label>
                        <input onChange={handleChange} type="password" value={user.Password} id='Password' name = 'Password' placeholder='Password' />
                    </div>
                    <div className="sub_box">
                        <label htmlFor="cPassword"><GiConfirmed /></label>
                        <input onChange={handleChange} type="password" value={user.cPassword} id='cPassword' name = 'cPassword' placeholder='Confirm Password' />
                    </div>
                    <button type="submit" onClick={PostData}>SignUp</button>
                </form>
            </div>
        </section>
    </>
  )
}

export default Registration