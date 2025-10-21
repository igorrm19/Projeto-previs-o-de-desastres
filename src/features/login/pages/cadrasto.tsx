import BUTTON from "../../../components/button";
import InputComponent from "../../../components/input";
import InformationCadrasto from "../components/informationCadrasto";
import useHooksNavigation from "../../../hooks/navegation";
import SocialMidiaButton from "../components/SocialMidiaButton";
import { useState } from "react";
import { useRef } from "react";
import AxiosFunc from "../../../services/axiosFunc";
import TiposAlerta from "../../../components/alerta";

const cadrastoPage = () => {
  const { goToSerech, goToLogin } = useHooksNavigation();

  const nomeRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const senhaRef = useRef<HTMLInputElement | null>(null);

  let [type, setType] = useState<"password" | "text">("password");
  let [confg, setConfg] = useState<"svgNotView" | "svgView">("svgNotView");

  function handleButtonClick() {
    setType("text");
    setConfg("svgView");

    if (type === "text") {
      setType("password");
      setConfg("svgNotView");
    }
  }

  async function handleSubmit(event: any) {
    event.preventDefault();

    let nome = nomeRef.current?.value;
    let email = emailRef.current?.value
    let senha = senhaRef.current?.value;

    console.log("enviar");

    await AxiosFunc(
      "http://localhost:3000/user/validation",
      { nome, email, senha },
      (status) => {
        if (status) {
          console.log("Enviado");
          goToSerech();
        }
      }
    );
  }

  return (
    <>
      <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center flex-col space-y-7">
        <TiposAlerta tipo="sucesso" />
        <div className="w-[80%] max-w-9xl mx-auto mt-12  min-h-[700px]  shadow-xl flex">
          <div className="flex w-full flex-col justify-center items-center pr-6 bg-teal-700 md:flex hidden">
            <InformationCadrasto text="Login" onClick={goToLogin} />
          </div>

          <div className="text-black flex flex-col justify-center items-center pr-6 bg-white w-full">
            <div className="mb-10">
              <h1 className="text-4xl font-bold text-teal-600">Login</h1>
            </div>

            <form action="">
              <div>
                <InputComponent
                  text="Digite seu nome"
                  type="text"
                  tipo={"svgNome"}
                  typeRef={nomeRef}
                />
              </div>

              <div>
                <InputComponent
                  text="Digite seu email"
                  type="email"
                  tipo={"svgEmail"}
                  typeRef={emailRef}
                />
              </div>

              <div>
                <InputComponent
                  text="Digite sua senha"
                  type={type}
                  tipo={"svgCadiado"}
                  tipoTwe={confg}
                  typeRef={senhaRef}
                  onClick={handleButtonClick}
                />

                <a
                  className="text-teal-700 mt-40 hover:text-blue-600 hover:underline"
                  onClick={goToLogin}
                ></a>
              </div>

              <BUTTON
                onClick={(event) => {
                  handleSubmit(event);
                }}
                marginBottom={"4"}
                width={"100%"}
                text="cadastrar"
              />

              <div className="mt-7">
                <SocialMidiaButton
                  text="Continua com Facebook"
                  color={"#3b5998"}
                  condicao={true}
                />

                <SocialMidiaButton
                  text="Continua com Google"
                  color={"#db4437"}
                  condicao={false}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default cadrastoPage;
