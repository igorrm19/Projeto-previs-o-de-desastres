import svgEmail from "../../../components/svg/svgEmail";
import svgSenha from "../../../components/svg/svgSenha";
import svgSenhaCadiado from "../../../components/svg/svgSenhaCadiado";
import svgSenhaVisualizar from "../../../components/svg/svgSenhaVisualizar";


const svgInputObject = [
  { email: svgEmail },
  { senha: svgSenha },
  { senhaCadiado: svgSenhaCadiado },
  { senhaVisualizar: svgSenhaVisualizar }
] as const;

export default svgInputObject;
