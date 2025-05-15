import { useNavigate} from "react-router-dom";

function useHooksNavigation() { 
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/");
    }

    const goToCadrasto = () => {
        navigate("/cadastro");
    }

    return {goToLogin, goToCadrasto};
}

export default useHooksNavigation;