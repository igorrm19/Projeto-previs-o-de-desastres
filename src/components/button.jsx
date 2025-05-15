
import PropTypes from "prop-types";

const BUTTON = ({ onClick, text, hPx}) => {
    return <>
    
         <button onClick={onClick} className={`w-[50%] h-[${hPx}] px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-700 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600`} >
           {text}
         </button>
       
       </>
}

//semelhante a tipos de typscript

BUTTON.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  hPx: PropTypes.string
};

export default BUTTON;