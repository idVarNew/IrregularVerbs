import { connect } from "react-redux";
import { filtrByFeatured } from "../../actions";
import Link from "../../components/filters/links/Featured";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    filtrByFeatured: () => {
      dispatch(filtrByFeatured(ownProps.filterName))
    }
  }
}

const FilterLink = connect(
  null,
  mapDispatchToProps
)(Link)

export default FilterLink;











