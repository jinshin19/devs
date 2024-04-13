import { useGetDevsQuery } from "../services/queries";
import { DevTypes } from "../types/types";
import Devs from "./Devs";

const DevsContainer = () => {
  const { data } = useGetDevsQuery();
  return (
    <div className="devs-container">
      {data && data?.data.map((d: DevTypes) => <Devs key={d?.id} {...d} />)}
    </div>
  );
};

export default DevsContainer;
