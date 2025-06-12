import PropTypes from "prop-types";
import objectVariaveisTailwind from "../objectsVariaveis/objVariaveisTailwand";
import ButtonInput from "../features/login/components/buttonInput";

function InputComponent({ type, text, tipo, tipoTwe}) {
  const paddingNumber = objectVariaveisTailwind.Input.paddingNumber;
  const bgColor = objectVariaveisTailwind.Input.bgColor;
  const textColor = objectVariaveisTailwind.Input.textColor;


  return (
    <>
      <div className="flex align-center justify-center items-center mb-4 bg-white h-full w-full border-2 border-black rounded-md ">
        <ButtonInput tipo={tipo} />
        <input
          style={{
            padding: `${paddingNumber * 0.25}rem`,
            color: `${textColor}`,
            backgroundColor: `${bgColor}`,
          }}
          className={`border-none h-full  border-gray-300 rounded-md w-full rounded-xl click:border-blue-700 focus:border-blue-700 focus:outline-none`}
          type={type}
          placeholder={text}
        />
        <ButtonInput tipo={tipoTwe} />
        </div>
    </>
  );
}

InputComponent.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  width: PropTypes.string,
  tipo: PropTypes.string,
  tipoTwe: PropTypes.string
};

export default InputComponent;
