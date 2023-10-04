import { FormRow, FormRowSelect } from ".";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../assets/wrapper/SearchContainer";
import { handleChange, clearFilters } from "../features/get/getSlice";

const SearchContainer = () => {
  const dispatch = useDispatch();
  const {
    isLoading,
    search,
    genreTypeOptions,
    searchGenre,
    sort,
    sortOptions,
  } = useSelector((state) => state.get);

  const handleSearch = (e) => {
    if (isLoading) return;
    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearFilters());
  };
  return (
    <Wrapper>
      <form className="form">
        <h4>search song</h4>
        {/* search position */}
        <div className="form-center">
          <FormRow
            type="text"
            name="search"
            value={search}
            handleChange={handleSearch}
          ></FormRow>

          {/* search by type */}
          <FormRowSelect
            labelText="genre"
            name="searchGenre"
            value={searchGenre}
            handleChange={handleSearch}
            list={["all", ...genreTypeOptions]}
          ></FormRowSelect>
          {/* sort */}

          <FormRowSelect
            name="sort"
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          ></FormRowSelect>
          <button
            className="btn btn-block btn-danger"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
