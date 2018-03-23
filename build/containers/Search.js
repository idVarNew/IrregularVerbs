import { connect } from "react-redux";
import { searchFor } from "../actions";
import SearchForm from "../components/search/SearchForm";


const mapDispatchToProps = (dispatch) => {
  return {
    searchFor: (value) => {
      dispatch(searchFor(value, "SHOW_SEARCH_RESULTS"))
    }
  }
}

const Search = connect(
  null,
  mapDispatchToProps
)(SearchForm)

export default Search;
