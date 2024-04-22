import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { useSearchedDev } from "../services/mutation";
import SearchResult from "./SearchResult";

export type SearchType = {
  search: string;
};

const Search = () => {
  const { data, mutate } = useSearchedDev();
  const { handleSubmit, control, trigger } = useForm<SearchType>();

  const searchHandler: SubmitHandler<SearchType> = (data) => mutate(data);

  return (
    <div className="search-wrapper">
      <form onSubmit={handleSubmit(searchHandler)}>
        <Controller
          name="search"
          control={control}
          rules={{
            validate: (value) => (!value ? "no value" : undefined),
          }}
          render={({ field }) => {
            const searchOnchangeHandler = (e) => {
              field.onChange(e);
              trigger("search");
              searchHandler({ search: field.value });
            };
            return (
              <>
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={searchOnchangeHandler}
                  value={field.value}
                />
                <div className="search-result">
                  {field?.value && data?.data?.data?.length == 0 && (
                    <ul>
                      <li>
                        <a
                          href="#"
                          style={{ pointerEvents: "none", textAlign: "center" }}
                        >
                          No result
                        </a>
                      </li>
                    </ul>
                  )}
                  {field?.value &&
                    data?.data?.data?.length > 0 &&
                    data?.data?.data.map(
                      (
                        search: {
                          id: string;
                          firstname: string;
                          middlename: string;
                          lastname: string;
                        },
                        k: number
                      ) => <SearchResult key={k} {...search} />
                    )}
                </div>
              </>
            );
          }}
        />
        <button type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </div>
  );
};

export default Search;

// clear the result when there's no data in the input
// make styling for the input
