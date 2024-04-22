import { Link } from "react-router-dom";

type SearchResultType = {
  id: string;
  firstname: string;
  middlename: string;
  lastname: string;
};

const SearchResult = ({
  id,
  firstname,
  middlename,
  lastname,
}: SearchResultType) => {
  return (
    <ul>
      <li>
        <Link to={`/read/${id}`}>
          {firstname && firstname} {middlename && middlename}{" "}
          {lastname && lastname}
        </Link>
      </li>
    </ul>
    // </div>
  );
};

export default SearchResult;
