import React,{ useState } from 'react'
import { message } from 'antd'
import { useNavigate } from 'react-router-dom';
import { userRequest } from '../components/RequestMethod';
import mainImg  from '../assets/Images/main.png';
import mainImg1  from '../assets/Images/main1.jpg';
import mainImg2  from '../assets/Images/main3.png';
import CarouselImages from './CarouselImages';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {

    const navigate = useNavigate();
    const[email, setEmail] = useState('');
    const [password,setPassword] =  useState('');
    const [showPassword,setShowPassword] = useState(false);
    
    
    let user = JSON.stringify({
        "email": email,
        "password": password,
      });

      const handleLogin = async (e) => {
        await userRequest.post("/api/school/login", user)
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
    //style={{ backgroundImage: `url(/Images/1.jpeg)`}}
    //style={{backgroundImage : `url(${mainImg})`}}  w-[100%] h-[100vh] bg-contain bg-no-repeat
  return (
    <>
    {/* <div className='flex justify-center items-center  w-[100%] h-[100vh] bg-cover bg-no-repeat bg-center' style={{backgroundImage : `url(${mainImg2})`}} > */}
      {/* <div className='w-[50%] '>
        
        <img src={ mainImg } alt='' className='h-[75%] w-[100%]' />
      </div> */}
    <CarouselImages />
      
    <div className="fixed top-20 md:top-32 left-[16%] md:left-[24%]  flex flex-col items-center justify-center  md:w-[400px] md:h-[250px] bg-[#fff] border-2 border-[#1877f2] shadow-xl rounded-lg p-2">
          
            <h1 className=' text-xl md:text-2xl font-semibold'>Admin Login</h1>
            <input className='border-2 border-[#dddfe2] rounded-lg w-[92%] text-base text-[#1d2129] outline-none mt-4 py-1 md:py-2 pl-2' type= "text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your e-mail"></input>
            <div className='flex items-center justify-between border-2 border-[#dddfe2] rounded-lg w-[92%] text-base text-[#1d2129] outline-none mt-4 py-1 md:py-2 pl-2 pr-6 md:pr-2'>
            <input className='outline-none' type={showPassword ? "text" : "password"} name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password"></input>
            <div className='' onClick={()=>setShowPassword(!showPassword)}>
                  {showPassword ? <FaEye /> : <FaEyeSlash /> }
               </div>
               </div>
            <div className=" flex justify-center bg-[#1877f2] border-2 border-[#1877f2] rounded-xl w-[92%] outline-none text-white md:text-xl font-semibold md:py-1 mt-6 mb-4 cursor-pointer" onClick={handleLogin}>Login</div>
        </div>
        {/* </div> */}
        
    </>
  )
}

export default Login