import React from 'react';

const BUTTON = ({ onClick, text=""}) => {
    return <>
    
         <button onClick={onClick} className={"w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-700 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"} >
           {text}
         </button>
       
       </>
}

export default BUTTON;