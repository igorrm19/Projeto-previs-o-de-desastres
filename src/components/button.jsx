import PropTypes from "prop-types";

const BUTTON = ({ onClick, text, width, marginBottom }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`w-[${width}] h-[45px] mt-0 mb-${marginBottom} px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-700 rounded-lg shrink-0  hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600`}
      >
        {text}
      </button>
    </>
  );
};

//semelhante a tipos de typscript

BUTTON.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  width: PropTypes.string,
  marginBottom: PropTypes.string,
};

BUTTON.defaultProps = {
  marginBottom: "2",
};

export default BUTTON;
