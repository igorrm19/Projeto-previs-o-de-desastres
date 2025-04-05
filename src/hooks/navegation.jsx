import { useNavigate} from "react-router-dom";

function useHooksNavigation() { 
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/");
    }

    return {goToLogin};
}

export default useHooksNavigation;