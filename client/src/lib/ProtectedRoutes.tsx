import { PropsWithChildren, useEffect } from "react";
import { isAuthenticated } from "./authHelper";
import { useNavigate } from "react-router-dom";

type ProtectedRoutesTypes = PropsWithChildren;
const ProtectedRoutes = ({ children }: ProtectedRoutesTypes) => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = await isAuthenticated();
      console.log(token || token !== null || token !== undefined);
      if (token) {
        return true;
      } else {
        navigate("/login", { replace: true });
      }
    };
    fetchData();
  }, [navigate]);

  return children;
};

export default ProtectedRoutes;
