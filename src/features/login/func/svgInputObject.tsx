import svgEmail from "../../../components/svg/svgEmail";
import svgSenha from "../../../components/svg/svgSenha";
import svgSenhaCadiado from "../../../components/svg/svgSenhaCadiado";
import svgSenhaVisualizar from "../../../components/svg/svgSenhaVisualizar";
import svgNome from "../../../components/svg/svgNome"


const svgInputObject = [
  { tipo: "svgEmail", component: svgEmail },
  { tipo: "svgNotView", component: svgSenha },
  { tipo: "svgCadiado", component: svgSenhaCadiado },
  { tipo: "svgView", component: svgSenhaVisualizar },
  {tipo: "svgNome", component: svgNome}
] as const;

export default svgInputObject;
