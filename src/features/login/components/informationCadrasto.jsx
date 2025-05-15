import BUTTON from "../../../components/button";
import SVGIlustration from "../../error/components/svdIlustration";
import useHooksNavigation from "../../../hooks/navegation";

function InformationCadrasto() {
  const { goToCadrasto } = useHooksNavigation();

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
          <BUTTON onClick={goToCadrasto} text="Cadastre-se" />
        </div>
      </div>
    </>
  );
}

export default InformationCadrasto;

