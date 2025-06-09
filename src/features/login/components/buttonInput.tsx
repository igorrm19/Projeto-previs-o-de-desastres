import objectVariaveisTailwind from "../../../objectsVariaveis/objVariaveisTailwand";
import svgInputObject from "../func/svgInputObject";

function buttonInput() {
  const paddingNumber = objectVariaveisTailwind.Input.paddingNumber;
  const bgColor = objectVariaveisTailwind.Input.bgColor;
  const textColor = objectVariaveisTailwind.Input.textColor;
  const IconEmail = svgInputObject.email;
  
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
        <IconEmail />
      </button>
    </>
  );
}

export default buttonInput;

