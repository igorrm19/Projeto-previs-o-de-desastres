import PropTypes from "prop-types";   

function InputComponent({type, text, width}) {
  return (
    <>
      <input
        className={`border-2 color-gray-300 bochunda123rder-gray-300 rounded-md p-2 mb-4 w-[${width}] rounded-xl click:border-blue-700 focus:border-blue-700 focus:outline-none`}
        type={type}
        placeholder={text}
      />
    </>
  );
}

InputComponent.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
    width: PropTypes.string
}

export default InputComponent;
