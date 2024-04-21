import { Link } from "react-router-dom";

type SearchResultType = {
  id: string;
  username: string;
};

const SearchResult = ({ id, username }: SearchResultType) => {
  return (
    <div className="search-result">
      <ul>
        <li>
          <Link to={`/read/${id}`}>{username}</Link>
        </li>
      </ul>
    </div>
  );
};

export default SearchResult;
