import PropTypes from "prop-types";

const IMG = ({ src, alt = "", className = "" }) => {
  console.log("O que tem aqui" + className);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`rounded-lg shadow-md  ${className}`}
      ></img>
    </>
  );
};

IMG.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

IMG.defaultProps = {
    alt: "",
    className: ""
}

export default IMG;
