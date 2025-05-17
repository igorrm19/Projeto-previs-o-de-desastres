import PropTypes from "prop-types";

function InputComponent({type, text}) {
  return (
    <>
      <input
        className="border-2 border-gray-300 rounded-md p-2 mb-4 w-full rounded-xl click:border-blue-700 focus:border-blue-700 focus:outline-none"
        type={type}
        placeholder={text}
      />
    </>
  );
}

InputComponent.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string
}

export default InputComponent;
