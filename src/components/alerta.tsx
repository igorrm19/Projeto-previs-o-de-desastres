
import arrayAlerta from "../func/arrayAlerta";

let tipos = ["sucesso"] as const;
type tipos = {
  Alert: (typeof arrayAlerta)[number];
};
type typeInput = (typeof tipos)[number];

function TiposAlerta({tipo}: {tipo: typeInput}) {

  const alertaComponent = arrayAlerta.find((item) => item.tipo == tipo)

  return(
    <>
     {alertaComponent && <alertaComponent.component/>}
    </>
  )
    
}


export default TiposAlerta;