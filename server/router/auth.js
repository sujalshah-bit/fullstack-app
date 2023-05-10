const express = require('express')
const router = express.Router()
require('../db/conn')
const User = require('../models/users')


router.post('/register' ,async(req,res)=>{
    const  { name, email, Phone, Work, Password, cPassword } = req.body

    if (!name || !email || !Phone || !Work || !Password || !cPassword) {
            return res.status(422).json({error:"Plz filled properly"})
    } 

    try {
        const userExist = await User.findOne({email: email})
        if(userExist){
            return res.status(422).json({error:"Email already Exist"})
        }
        const user = new User({name, email, Phone, Work, Passwod, cPasswod})
        await user.save()
        res.status(201).json({message:"succesfully registered"})

    } catch (error) {
        console.log(error);
    }
})

router.post('/login', async (req, res)=>{
    const  {email, Password} = req.body
    if(!email || Password){
        return res.status(422).json({error:"Plz filled properly"})
    }
    const userLogin = await User.findOne({email:email})

    if(!userLogin){
        res.status(422).json({message:"Invalid credentials"})
    }else{
        res.status(201).json({message:"successfully login"})

    }
})



module.exports = router