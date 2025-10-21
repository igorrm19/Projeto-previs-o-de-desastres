import { NavigateFunction, useNavigate} from "react-router-dom";


function useHooksNavigation(): any {
    

    const navigate: NavigateFunction = useNavigate();

    const goToLogin = (): void => {
        navigate("/");
    }

    const goToCadrasto = () => {
        navigate("/cadastro");
    }

    const goToSerech = () => {
        navigate("/searech")
    }

    return {goToLogin, goToCadrasto, goToSerech};
}

export default useHooksNavigation;



