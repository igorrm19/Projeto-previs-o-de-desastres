import objectVariaveisTailwind from "../../../objectsVariaveis/objVariaveisTailwand";
import svgInputObject from "../func/svgInputObject";


function buttonInput({ tipo }: { tipo: "email" | "senha" }) {
  
  const paddingNumber = objectVariaveisTailwind.Input.paddingNumber;
  const bgColor = objectVariaveisTailwind.Input.bgColor;
  const textColor = objectVariaveisTailwind.Input.textColor;
  const Email = svgInputObject.email;
  const Senha = svgInputObject.senha;

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
        {tipo == "email" ? <Email /> : tipo == "senha" ? <Senha /> : null}

      </button>
    </>
  );
}

export default buttonInput;

