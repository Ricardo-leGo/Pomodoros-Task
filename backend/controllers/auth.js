require('dotenv').config();
const User              = require('../models/User');
const Task              = require('../models/Tasks');
const bcrypt            = require('bcrypt')
const passport          = require('../config/passport')
exports.controlSignup = async(req,res) =>{
    let { password } =  req.body
    const { name , email , confirmPassword}= req.body
    const salt              = bcrypt.genSaltSync(Number(process.env.SALT))
    const hashPassword      = bcrypt.hashSync(password,salt)
    const isExist           = await  User.findOne({ email })
    if (isExist!==null||isExist==false){
        return  res.status(500).json({msg:"User Already exist", status:false})
    }else{ 
        const usuario = await User.register({name, email, password:hashPassword},password)
        return  res.status(201).json({msg:"Register Succes!", status:true})
    }
}

exports.controlLogin = async(req,res)=>{
    
    const {email, password} = req.body
    const isUserExist =  await User.findOne({email})
    const {_id, name} = isUserExist 
    const allTasksUser = await Task.find({author:_id}).sort({'createdAt':-1})
    // const allTasksUser = await Task.find({author:_id})
    
console.log(allTasksUser);

    
    if(!isUserExist) res.status(500).json({msg:"Este usuario no existe, crea una cuenta.",status:false })

        
      
     const equals = bcrypt.compareSync(password, isUserExist.password)
     equals? res.status(200).json({msg:'All good', status:true, name, allTasksUser}):
             res.status(401).json({msg:"Something went wrong"})

    passport.authenticate('local');

}



exports.controlCreateNew = async (req,res) =>{
    const { user } = req.body
    let task = req.body    
   const author = await User.findOne({name:user})
    task.author = author._id
    let id = task.author
    const createTask = await Task.create(task)
    const allTasksUser = await Task.find({author:id}).sort({'createdAt':-1})
        res.status(200).json({msg:"Tasks  Updated", allTasksUser,})    
    
    
}