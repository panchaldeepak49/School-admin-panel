import React,{ useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { PiHandsClappingFill } from "react-icons/pi";
import LoginLeft from './LoginLeft';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { publicRequest } from './RequestMethod';
import { message } from 'antd';

const Login1 = () => {

    const navigate = useNavigate();
    const[email, setEmail] = useState('');
    const [password,setPassword] =  useState('');
    const [showPassword,setShowPassword] = useState(false);

    let user = JSON.stringify({
        "email": email,
        "password": password,
      });


      const handleLogin = async (e) => {
        await publicRequest.post("/api/school/login", user)
          .then((res) => {
            //console.log(res)
            message.success("Login success");
            localStorage.setItem("token",JSON.stringify(res.data.token));
            localStorage.setItem("user",JSON.stringify(res.data?.details?.name))
            navigate('/home');
            window.location.reload();
          })
          .catch((err) => {
            const errorMessage = err.response?.data?.message || "Server error occurred";
            //console.log(err)
            message.error(errorMessage);

          });
    };


  return (
    <>
      <div className='w-[100%] grid sm:grid-cols-2 gap-8 sm:gap-0 '>

<LoginLeft />
 
 {/* RHS */}
 
<div className='w-[100%] flex flex-col justify-center items-center'>
<div>
    <div className='flex  gap-4  '>
<h1 className='text-xl sm:text-2xl font-semibold  '>Welcome back! </h1>
<PiHandsClappingFill className='pb-2 text-2xl sm:text-4xl '/> 
</div>
    
<div className="mt-5  flex flex-col items-center justify-center  md:w-[400px] md:h-[300px] bg-[#fff] border-2 border-[#fc3903] shadow-xl rounded-lg p-2">
  

  <h1 className=' text-xl md:text-2xl font-semibold'>Admin Login</h1>
  <input className='border-2 border-[#dddfe2] rounded-lg w-[92%] text-base text-[#1d2129] outline-none mt-4 py-1 md:py-2 pl-2' type= "text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your e-mail"></input>
  <div className='flex items-center justify-between border-2 border-[#dddfe2] rounded-lg w-[92%] text-base text-[#1d2129] outline-none mt-4 py-1 md:py-2 pl-2 pr-6 md:pr-2'>
  <input className='outline-none' type={showPassword ? "text" : "password"} name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password"></input>
  <div className='' onClick={()=>setShowPassword(!showPassword)}>
        {showPassword ? <FaEye /> : <FaEyeSlash /> }
     </div>
     </div>
  <button className=" flex justify-center bg-[#1877f2] border-2 border-[#1877f2] rounded-xl w-[92%] outline-none text-white md:text-xl font-semibold md:py-1 mt-6 mb-4 cursor-pointer" onClick={handleLogin} >Next</button>
  <div className='flex gap-2 text-sm'>
  <Link to='' className='cursor-pointer hover:text-[#fc3903]'>SignUp |</Link>
  <Link to='' className='cursor-pointer hover:text-[#fc3903]'>Forgot password</Link>
  </div>
</div>
    
</div>
</div>
{/* RHS */}
</div>
    </>
  )
}

export default Login1