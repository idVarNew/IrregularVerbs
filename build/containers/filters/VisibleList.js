import { connect } from "react-redux";
import { toggleTodo } from "../../actions";
import { setFeaturedVerb } from "../../actions";
import { filtrByColor } from "../../actions";
import List from "../../components/pages/explore/List";
import Colors from "../../components/filters/links/Colors";

var name = "SHOW_ALL";

const getVisibleItems = (listOfVerbs, filterName, verbsDetails) => {

  switch (filterName.filterType) {
    case "SHOW_ALL":
      return listOfVerbs;
    case "SHOW_FEATURED":
      return listOfVerbs.filter(item => item.featured);
    case "SHOW_NOT_FEATURED":
      return listOfVerbs.filter(item => !item.featured);
    case "SHOW_WHITE":
      return listOfVerbs.filter(item => item.color === "#ffffff");
    case "SHOW_RED":
      return listOfVerbs.filter(item => item.color === "#ff5722");
    case "SHOW_GREEN":
      return listOfVerbs.filter(item => item.color === "#bdda9c");
    case "SHOW_ORANGE":
      return listOfVerbs.filter(item => item.color === "#ecbf84");
    case "SHOW_YELLOW":
      return listOfVerbs.filter(item => item.color === "#ece084");

    case "SHOW_SEARCH_RESULTS":
  
      return listOfVerbs.filter((item) => {

        if (filterName.filterAction.value) {

          const inputValue = filterName.filterAction.value.toLowerCase(),
          verb = item.text.toLowerCase(),
          searchResult = verb.search(inputValue);

          if (searchResult !== -1 && verb[0] === inputValue[0]) {
            return item;
          } else {
            return;
          }
        } else {
          return item;
        }
      });

  }
}


const mapStateToProps = state => {
  return {
    listOfVerbs: getVisibleItems(state.verbsList, state.visibilityFilter, state.verbsDetails),
    verbsDetails: state.verbsDetails
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeColor: id => {
      dispatch(changeColor(color, index))
    },
    setFeaturedVerb: id => {
      dispatch(setFeaturedVerb(id))
    }
  }
}

const VisibleItems = connect(
  mapStateToProps,
  mapDispatchToProps
)


export const VisibleList = VisibleItems(List);
export const ColorLink = VisibleItems(Colors);
export default VisibleList;

