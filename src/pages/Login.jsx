import React,{ useState } from 'react'
import { message } from 'antd'
import { useNavigate } from 'react-router-dom';
import { userRequest } from '../components/RequestMethod';
import mainImg  from '../assets/Images/main.png'

const Login = () => {

    const navigate = useNavigate();
    const[email, setEmail] = useState('');
    const [password,setPassword] =  useState('');
    
    
    let user = JSON.stringify({
        "email": email,
        "password": password,
      });

      const handleLogin = async (e) => {
        await userRequest.post("/api/school/login", user)
          .then((res) => {
            
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
    <div className='flex justify-center items-center w-[100%] h-[100vh] bg-cover bg-no-repeat bg-center' style={{backgroundImage : `url(${mainImg})`}} >
      {/* <div className='w-[50%] '>
        
        <img src={ mainImg } alt='' className='h-[75%] w-[100%]' />
      </div> */}

      
    <div className=" flex flex-col items-center justify-center mt-20 w-[400px] bg-[#fff] border-2 border-[#1877f2] shadow-xl rounded-lg p-2">
            {/* {console.log(user)} */}
            <h1 className='text-2xl font-semibold'>Admin Login</h1>
            <input className='border-2 border-[#dddfe2] rounded-lg w-[92%] text-base text-[#1d2129] outline-none mt-4 py-2 pl-2' type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your e-mail"></input>
            <input className='border-2 border-[#dddfe2] rounded-lg w-[92%] text-base text-[#1d2129] outline-none mt-4 py-2 pl-2' type="password"name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password"></input>
            <div className=" flex justify-center bg-[#1877f2] border-2 border-[#1877f2] rounded-xl w-[92%] outline-none text-white text-xl font-semibold py-1 mt-6 mb-4 cursor-pointer" onClick={handleLogin}>Login</div>
        </div>
        </div>
        
    </>
  )
}

export default Login