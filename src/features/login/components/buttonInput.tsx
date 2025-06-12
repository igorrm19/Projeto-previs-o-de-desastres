import objectVariaveisTailwind from "../../../objectsVariaveis/objVariaveisTailwand";
import svgInputObject from "../func/svgInputObject";

let tipos = ["email", "senha", "cadiado"] as const;
type TipoInput = (typeof tipos)[number];

function buttonInput({ tipo, tipoTwe }: { tipo: TipoInput } & { tipoTwe: TipoInput }) {

  const paddingNumber = objectVariaveisTailwind.Input.paddingNumber;
  const bgColor = objectVariaveisTailwind.Input.bgColor;
  const textColor = objectVariaveisTailwind.Input.textColor;
  const Email = svgInputObject.email;
  const Senha = svgInputObject.senha;
  const SenhaCadiado = svgInputObject.senhaCadiado;

  return (
    <>
      <button
        style={{
          padding: `${paddingNumber * 0.25}rem`,
          color: `${textColor}`,
          backgroundColor: `${bgColor}`,
        }}
        className={`rounded-md border-none`}
      >
        {tipo === "email" ? <Email /> : tipo === "senha" ? <Senha /> : tipo === "cadiado" ? <SenhaCadiado /> :  tipoTwe === "email" ? <Email /> : tipoTwe === "senha" ? <Senha /> : tipoTwe === "cadiado" ? <SenhaCadiado /> : null}

      </button>
    </>
  );
}

export default buttonInput;

