import React, { Component } from "react";
import "./index.css";
import { Header } from "../../components/Header";
import { Details } from "../../components/ImageDetailsComponent";
import {getSpecificSubBreedData} from "../../container/Home/selector";
import {getSpecificSubBreedsThunk} from "../../container/Home/action";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class SubBreedPage extends Component {
  componentDidMount() {
      const {breedName,subBreedName}=this.props.location.state;
      this.props.specificSubBreedThunk({breedName,subBreedName})
  }
  render() {
    const {specificSubBreed} =this.props;
    let {subBreedName}=this.props.location.state;
    subBreedName = subBreedName.charAt(0).toUpperCase() + subBreedName.slice(1);
    return (
      <div>
        <Header header={`SubBreed : ${subBreedName}` } />
        <Details breedImages={specificSubBreed} />
      </div>
    );
  }
}

const mapStateToProps = (state)=>({
    specificSubBreed:getSpecificSubBreedData(state)
})

const mapDispatchToProps = (dispatch)=>({
    specificSubBreedThunk:(payload) => dispatch(getSpecificSubBreedsThunk(payload))
})
const withRouterComponent = withRouter(SubBreedPage)
export default connect(mapStateToProps, mapDispatchToProps)(withRouterComponent);
