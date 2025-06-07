import PropTypes from "prop-types";
import svgInputObject from "../features/login/func/svgInputObject"

function InputComponent({ type, text, width}) {
  const paddingNumber = 4;
  const bgColor = "transparent";
  const textColor = "black"
  const IconEmail = svgInputObject.email;

  return (
    <>
      <div className="flex align-center justify-center items-center mb-4 bg-white h-full w-full border-2 border-black rounded-md ">
        <button
          style={{
            padding: `${paddingNumber * 0.25}rem`,
            color: `${textColor}`,
            bgColor: `${bgColor}`,
          }}
          className={`rounded-md border-none`}
        >
          <IconEmail />

        </button>
        <input
          style={{
            padding: `${paddingNumber * 0.25}rem`,
            color: `${textColor}`,
          }}
          className={`border-none h-full  ${bgColor} border-gray-300 rounded-md w-[${width}] rounded-xl click:border-blue-700 focus:border-blue-700 focus:outline-none`}
          type={type}
          placeholder={text}
        />
      </div>
    </>
  );
}

InputComponent.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  width: PropTypes.string,
  iconButton: PropTypes.node,
};

export default InputComponent;
