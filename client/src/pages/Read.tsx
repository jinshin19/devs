import Footer from "../components/Footer";
import Nav from "../components/Nav";
import ReadComponent from "../components/ReadComponent";
import { Params, useParams } from "react-router-dom";
import { useGetDevByIDQuery } from "../services/queries";

const Read = () => {
  const { id }: Params = useParams();
  const { data } = useGetDevByIDQuery(id!);
  console.log(data);
  return (
    <div className="wrapper read-wrapper">
      <Nav />
      <ReadComponent {...data?.data[0]} />
      <Footer />
    </div>
  );
};

export default Read;
