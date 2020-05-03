import React, { Component } from "react";
import { Details } from "../../components/Details";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { getBreedDetails } from "../../container/Home/selector";
import { getBreedDetailsThunk } from "../../container/Home/action";
import { withRouter } from "react-router";
import { Header } from "../../components/Header";
import { withAlert } from "react-alert";

class BreedDetails extends Component {
  componentDidMount() {
    const breedName = this.props.location.state;
    this.props.breedDetailsThunk(breedName);
  }
  render() {
    const { breedDetails,alert } = this.props;
    let breedName = this.props.location.state;
    breedName = breedName.charAt(0).toUpperCase() + breedName.slice(1);
    return (
      <div>
        <Header header={`Breed  : ${breedName}`} />
        <Details specificBreedImages={breedDetails} onClick={() => {
            alert.show("Oh look, an alert!");
          }}  />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  breedDetails: getBreedDetails(state),
});

const mapDispatchToProps = (dispatch) => ({
  breedDetailsThunk: (payload) => dispatch(getBreedDetailsThunk(payload)),
});

const RouteComponent = withRouter(BreedDetails);
const AlertRouteComponent = withAlert()(RouteComponent);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlertRouteComponent);
