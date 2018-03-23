import { connect } from "react-redux";
import { filtrByColor } from "../../actions";
import ColorLink from "../../components/filters/links/Colors";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    filtrByColor: () => {       
       dispatch(filtrByColor(ownProps.filterName))
    }
  }
}

const FilterLink = connect(
  null,
  mapDispatchToProps
)(ColorLink)

export default FilterLink;