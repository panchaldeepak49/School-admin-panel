import React,{ useState } from 'react'
import { userRequest, userRequest1 } from './RequestMethod';
import { message } from 'antd';

const UploadImgFile1 = ({imgURL,setImgURL}) => {

    const [image,setImage] = useState('');
    console.log(image)

    const saveImage =async()=>{
        if (!image) {
            message.error('Please select a file to upload');
            return;
          }
      
          const formData = new FormData();
          formData.append('file', image);

         await userRequest1.post('/api/upload/cloud',formData)
         .then((res)=>{
            console.log(res)
            const result = res
            message.success('File uploaded successfully')
         })
         .catch((err)=>{
            //const apiMessage = err.response.message || "an error occurred"
            console.error(err)
            //message.error(apiMessage)
         })
    }
  return (
    <>
    <input type= 'file' onChange={(e)=>setImage(e.target.files[0])} />
    <button className='border border-gray-400' onClick={saveImage}>Upload image</button>
    </>
  )
}

export default UploadImgFile1