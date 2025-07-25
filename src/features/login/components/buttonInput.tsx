import objectVariaveisTailwind from "../../../objectsVariaveis/objVariaveisTailwand";
import svgInputObject from "../func/svgInputObject";

let tipos = ["svgEmail", "svgNotView", "svgCadiado", "svgView"] as const;
type tipos = {
  SVG: (typeof svgInputObject)[number];
};
type TipoInput = (typeof tipos)[number];

function buttonInput({
  tipo,
  tipoTwe,
  type,
  onClick,
}: { tipo: TipoInput } & { tipoTwe: TipoInput } & {
  type: "button" | "submit" | "reset";
} & { onClick?: () => void } ) {

  const paddingNumber = objectVariaveisTailwind.Input.paddingNumber;
  const bgColor = objectVariaveisTailwind.Input.bgColor;
  const textColor = objectVariaveisTailwind.Input.textColor;

  const svgItem = svgInputObject.find(
    (item) => item.tipo === tipo || item.tipo === tipoTwe
  );

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
        {svgItem && <svgItem.component />}

      </button>
    </>
  );
}

export default buttonInput;
