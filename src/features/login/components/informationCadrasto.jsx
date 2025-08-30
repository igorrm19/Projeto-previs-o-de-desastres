import BUTTON from "../../../components/button";
import SVGIlustration from "../../error/components/svdIlustration";
import PropTypes from "prop-types";

function InformationCadrasto({text, onClick}) {

  return (
    <>
      <div className="relative flex  flex-col items-center justify-center">
        <div className="absolute -top-16 flex justify-center items-center z-0">
          <SVGIlustration />
        </div>
        <h1 className="pt-64 text-3xl font-bold text-center text-white">
          Bem vindo a seção <span className="text-teal-400">inicial</span>
        </h1>
        <p className="text-lg text-center text-gray-300 mt-4">
          Por favor, faça login para acessar sua conta ou cadastre-se.
        </p>
        <div className="flex flex-col items-center mt-8">
          <BUTTON
            width={"150px"}
            onClick={onClick}
            text={text}
          />
        </div>
      </div>
    </>
  );
}

InformationCadrasto.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
};

export default InformationCadrasto;
