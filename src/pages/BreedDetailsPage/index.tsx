import React, { Component } from "react";
import { Details } from "../../components/ImageDetailsComponent";
import { connect } from "react-redux";
import { getBreedDetails,getLoadingState,getSubBreedList } from "../../container/Home/selector";
import { getBreedDetailsThunk,getSubBreedsThunk } from "../../container/Home/action";
import { Header } from "../../components/Header";
import { Spinner } from "../../components/Spinner";
import { List } from "../../components/common/List"
import { withRouter } from "react-router";
import { withAlert } from "react-alert";

interface BreedDetailsProps{
  location:any;
  history:any;
  breedDetailsThunk:(breedName)=>{};
  subBreedListThunk:(breedName)=>{};
  breedDetails:Array<string>;
  isLoading:boolean;
  subBreedList:Array<string>;
}

class BreedDetails extends Component<BreedDetailsProps,{}> {
  componentDidMount():void {
    const breedName:string = this.props.location.state;
    console.log("history******",this.props)
    this.props.breedDetailsThunk(breedName);
    this.props.subBreedListThunk(breedName);
  }

   goToSpecificSubBreed =(item:string):void=>{
    const breedName:string = this.props.location.state;
    this.props.history.push("/specificSubBreed",{breedName,subBreedName:item});
    
}

  render():React.ReactNode {
    const { breedDetails,isLoading,subBreedList } = this.props;
    let breedName:string = this.props.location.state;
    breedName = breedName.charAt(0).toUpperCase() + breedName.slice(1);
    return isLoading ? <Spinner/> : (
      <div>
        <Header header={`${breedName}`}  style={{fontSize:"30px"}}/>
        {(subBreedList && subBreedList.length > 0) && <List header={"Choose A Sub Breed"} list={subBreedList} onClick={this.goToSpecificSubBreed} />}
        <Details breedImages={breedDetails} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  breedDetails: getBreedDetails(state),
  isLoading:getLoadingState(state),
  subBreedList:getSubBreedList(state)
});

const mapDispatchToProps = (dispatch) => ({
  breedDetailsThunk: (payload) => dispatch(getBreedDetailsThunk(payload)),
  subBreedListThunk:(payload) => dispatch(getSubBreedsThunk(payload))
});

const RouteComponent = withRouter(BreedDetails);
const AlertRouteComponent = withAlert()(RouteComponent);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlertRouteComponent);
