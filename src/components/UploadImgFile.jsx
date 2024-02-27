import React,{ useState } from 'react'
import { message, Upload } from 'antd';
import studentImg from '/Images/avatar-4.jpg';

const { Dragger } = Upload;
const UploadImgFile = ({ imgURL, setImgURL}) => {

    // resumeURL = imgURL;
    // setResumeURL = setImgURL;

  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [fileList, setFileList] = useState([]);

  const props = {
    name: 'file',
    multiple: false,
    action: 'http://localhost:5000/api/upload', // It needs to be changed with a valid backend API
    // headers: {
    //   Authorization: 'YourAuthorizationHeader', // Update this with your authorization header
    // },
    fileList: fileList,
    accept: '.pdf,.doc,.docx,.png,.jpeg,.jpg', // Specify accepted file types (PDF and Word documents)

    beforeUpload(file) {
      const allowedTypes = ['.pdf', '.doc', '.docx','.png','.jpeg','.jpg'];
      const fileExtension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();

      if (allowedTypes.includes(fileExtension)) {
        return true; // Allow only PDF and Word documents
      } else {
        message.error('Please upload a PDF or Word document.');
        return false; // Reject the file and don't add it to the fileList
      }
    },
    onChange(info) {
      const { status } = info.file;
      if (status === 'uploading') {
        setFileList([info.file]);
      }
      console.log(info.file);
      if (status === 'done') {
        setImgURL(info.file.response.url);
        setIsImageUploaded(true);
        message.success(`${info.file.name} file uploaded successfully.`);
        setFileList([]);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
        setFileList([]);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  return (
    <>
    <div className='w-[50%]  flex justify-center items-center '>
      
      <Dragger {...props} disabled={isImageUploaded}>
    
      {imgURL ? (
            <img className='h-28 w-28 rounded-md' src={imgURL} alt="Uploaded Image" />
          ) : (
     <p className="ant-upload-drag-icon h-[70%] w-full  flex flex-col gap-2 items-center justify-center ">
      <img className='h-28 w-28 rounded-md' src={studentImg}></img>
      <p className="ant-upload-text"><span className=''>Choose image</span></p>
     </p>
    )}


  </Dragger>
    </div>
    </>
  )
}

export default UploadImgFile