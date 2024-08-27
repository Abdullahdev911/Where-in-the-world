import { createContext,useState  } from "react";

export  const DarkModeContext = createContext();

export function DarkModeProvider({children}){
    
    const [isDarkMode,setIsDarkMode] = useState(true);

    function handleModeChange(){
      
     const element =  document.querySelector('html')
     if(element.classList.contains('dark')){
      element.classList.remove('dark')
      element.classList.add('light')
      setIsDarkMode(!isDarkMode);
     }else{
      element.classList.remove('light')
      element.classList.add('dark')
      setIsDarkMode(!isDarkMode);
     }
  
    }
    return(
        <DarkModeContext.Provider value={{isDarkMode,setIsDarkMode,handleModeChange}}>
            {children}
        </DarkModeContext.Provider>

    )
}

export default DarkModeProvider 
