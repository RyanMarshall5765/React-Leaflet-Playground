import React from "react";
import { push } from "connected-react-router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PlacesMap from "../components/PlacesMap";
import TimeSlider from "../components/TimeSlider";

function Places() {
  return (
    <div>
      <PlacesMap />
      <hr />
      <TimeSlider />
    </div>
  );
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push("/Places")
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(Places);
