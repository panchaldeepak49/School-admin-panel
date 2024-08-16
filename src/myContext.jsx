import {useState, createContext } from 'react';


const MyContext = createContext();
const MyProvider = ({children})=>{

    const[countAll,setCountAll] = useState('');
    const[studentX,setStudentX] = useState('');


    return(
        <MyContext.Provider value={{ countAll,setCountAll,studentX,setStudentX }}>
             {children}
        </MyContext.Provider>
    )
}

export {MyContext,MyProvider}