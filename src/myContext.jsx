import {useState, createContext } from 'react';


const MyContext = createContext();
const MyProvider = ({children})=>{

    const[countAll,setCountAll] = useState('');
    const[studentX,setStudentX] = useState('');
    const [selectedStandard,setSelectedStandard] = useState('X');
    const [apiClass,setApiClass] = useState('');


    return(
        <MyContext.Provider value={{ countAll,setCountAll,studentX,setStudentX,selectedStandard,setSelectedStandard,apiClass,setApiClass }} >
             {children}
        </MyContext.Provider>
    )
}

export {MyContext,MyProvider}