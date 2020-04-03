import axios      from 'axios';
let baseURL;
process.env.NODE_ENV === 'production'
  ? (baseURL = 'Production Endpoint')
  : (baseURL = 'http://localhost:3000');

const Services = axios.create({ withCredentials: true, baseURL });


export const SignupServices = async(userSignup) =>{  
  const data = await Services.post('/signup', userSignup )
  return data
}
export const LoginServices = async(userLogin) =>{
  const data = await Services.post('/login', userLogin)
  return data
}

export const createTask = async(task) =>{
  const data = await Services.post('/new', task)
  return data
}
export const deleteTask = async({target}) =>{
const { id } = target 
console.log(id);
  const data = await Services.post('/deletetask', {id})
  return data
}