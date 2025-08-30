import { useNavigate} from "react-router-dom";

function useHooksNavigation() { 
    const navigate = useNavigate();

    const goToLogin = () => {
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



