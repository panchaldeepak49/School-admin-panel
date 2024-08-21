import {useState, createContext } from 'react';


const MyContext = createContext();
const MyProvider = ({children})=>{

    const[countAll,setCountAll] = useState('');
    const[studentX,setStudentX] = useState('');
    const [selectedStandard,setSelectedStandard] = useState('X');


    return(
        <MyContext.Provider value={{ countAll,setCountAll,studentX,setStudentX,selectedStandard,setSelectedStandard }}>
             {children}
        </MyContext.Provider>
    )
}

export {MyContext,MyProvider}