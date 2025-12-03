import {useEffect} from "react";
import { useNavigate } from "react-router-dom";

const RefreshHandler = () => {
    const navigate=useNavigate();

    useEffect(() => {
        if(performance.getEntriesByType("navigation")[0].type==="reload"){
            navigate("/");

        }

    },[]);
    return null;
};

export default RefreshHandler;