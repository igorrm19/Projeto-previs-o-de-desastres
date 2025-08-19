import BUTTON from "../../../components/button";
import InputComponent from "../../../components/input";
import InformationCadrasto from "../components/informationCadrasto";
import useHooksNavigation from "../../../hooks/navegation";
import SocialMidiaButton from "../components/SocialMidiaButton";
import { useState } from "react";
import { useRef } from "react";
import axios from "axios";

const LoginPage = () => {
  const { goToCadrasto } = useHooksNavigation();

  const emailRef = useRef(null);
  const senhaRef = useRef(null);

  let [type, setType] = useState("password");
  let [confg, setConfg] = useState("svgNotView");

  function handleButtonClick() {
    setType("text");
    setConfg("svgView");

    if (type === "text") {
      setType("password");
      setConfg("svgNotView");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    let email = emailRef.current.value;
    let senha = senhaRef.current.value;

    console.log("enviar");
    
    axios
      .post("http://localhost:3000/auth/login", { email, senha })
      .then((response) => {
        console.log("Login successful:", response.data);
        alert("Login successful!");
      })
      .catch((error) => {
        if (error.response) {
          console.error("Login failed:", error.response.data);
          alert("falha no login, verifique suas credenciais.");
        } else if (error.request) {
          console.error("Login failed:", error.request);
          alert("falha no login, sem resposta do servidor.");
        } else {
          console.error("Login failed:", error);
          alert("falha no login, erro desconhecido");
        }
      });
  }

  return (
    <>
      <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center flex-col space-y-7">
        <div className="w-[80%] max-w-9xl mx-auto mt-12  min-h-[700px]  shadow-xl flex">
          <div className="flex w-full flex-col justify-center items-center pr-6 bg-teal-700 md:flex hidden">
            <InformationCadrasto />
          </div>

          <div className="text-black flex flex-col justify-center items-center pr-6 bg-white w-full">
            <div className="mb-10">
              <h1 className="text-4xl font-bold text-teal-600">Login</h1>
            </div>

            <form action="">
              <div>
                <label className="text-gray-900">Email</label>
                <InputComponent
                  text="Digite seu email"
                  type="email"
                  tipo={"svgEmail"}
                  typeRef={emailRef}
                />
              </div>

              <div>
                <label className="text-gray-900">Senha</label>
                <InputComponent
                  text="Digite sua senha"
                  type={type}
                  tipo={"svgCadiado"}
                  tipoTwe={confg}
                  typeRef={senhaRef}
                  onClick={handleButtonClick}
                  ty
                />

                <a
                  className="text-teal-700 mt-40 hover:text-blue-600 hover:underline"
                  onClick={goToCadrasto}
                ></a>
              </div>

              <BUTTON
                onClick={(event) => {
                  handleSubmit(event);
                  goToCadrasto();
                }}
                marginBottom={"4"}
                width={"100%"}
                text="Entrar"
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

export default LoginPage;
