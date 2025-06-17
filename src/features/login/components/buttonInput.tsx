import objectVariaveisTailwind from "../../../objectsVariaveis/objVariaveisTailwand";
import svgInputObject from "../func/svgInputObject";

let tipos = ["email", "senha", "cadiado"] as const;
type TipoInput = (typeof tipos)[number];

function buttonInput({ tipo, tipoTwe, type, onClick }: { tipo: TipoInput } & { tipoTwe: TipoInput } & { type: "button" | "submit" | "reset" } & { onClick?: () => void }) {

  const paddingNumber = objectVariaveisTailwind.Input.paddingNumber;
  const bgColor = objectVariaveisTailwind.Input.bgColor;
  const textColor = objectVariaveisTailwind.Input.textColor;
  const Email = svgInputObject[0].email;
  const Senha = svgInputObject[1].senha;
  const SenhaCadiado = svgInputObject[2].senhaCadiado;

  return (
    <>
      <button 
        type={type}
        style={{
          padding: `${paddingNumber * 0.25}rem`,
          color: `${textColor}`,
          backgroundColor: `${bgColor}`,
        }}

        className={`rounded-md border-none`}
        onClick={onClick}
      >
        {tipo === "email" ? <Email /> : tipo === "senha" ? <Senha /> : tipo === "cadiado" ? <SenhaCadiado /> :  tipoTwe === "email" ? <Email /> : tipoTwe === "senha" ? <Senha /> : tipoTwe === "cadiado" ? <SenhaCadiado /> : null}
        
      </button>
    </>
  );
} 

export default buttonInput;

