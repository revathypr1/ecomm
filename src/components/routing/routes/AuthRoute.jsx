import React, { useContext } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import { Context } from "../../contexts/Store";

const AuthRoute = ({ children }) => {
    const { state } = useContext(Context);
    const is_verified = state.user_data.is_verified;
    const [searchParams] = useSearchParams();
    const nextPath = searchParams.get("next") ? searchParams.get("next") : "/";

    return !is_verified ? children : <Navigate to={nextPath} />;
};

export default AuthRoute;


