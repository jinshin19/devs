import { useGetDevsQuery } from "../services/queries";
import { GetAllDevDataTypes } from "../types/types";
import Devs from "./Devs";

const DevsContainer = () => {
  const { data } = useGetDevsQuery();
  return (
    <div className="devs-container">
      {data &&
        data?.data.map((d: GetAllDevDataTypes) => {
          const id: string | null = localStorage.getItem("devs_ID");
          return d?.id !== id && <Devs key={d?.id} {...d} />;
        })}
    </div>
  );
};

export default DevsContainer;
