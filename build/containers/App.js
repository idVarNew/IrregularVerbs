import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions/index";
import Main from "../components/PageLayout";


function mapStateToProps(state) {
  return {
    verbsList: state.verbsList,
    verbsDetails: state.verbsDetails
  }
}


function mapDispachToProps(dispatch) {
  return bindActionCreators(
    actionCreators,
    dispatch
  );
}

const Content = connect(
  mapStateToProps,
  mapDispachToProps)(Main);

export default Content;