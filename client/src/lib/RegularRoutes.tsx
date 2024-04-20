import { PropsWithChildren, useEffect } from "react";
import { isAuthenticated } from "./authHelper";
import { useNavigate } from "react-router-dom";

type RegularRoutesTypes = PropsWithChildren;
const RegularRoutes = ({ children }: RegularRoutesTypes) => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = await isAuthenticated();
      if (token) {
        navigate("/", { replace: true });
      } else {
        return false;
      }
    };
    fetchData();
  }, [navigate]);

  return children;
};

export default RegularRoutes;
