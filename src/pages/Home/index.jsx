import React, { Component } from "react";
import "./index.css";
import { connect } from "react-redux";
import {
  getBreedDetailsThunk,
  getDogsRandomlyThunk,
  getBreedsThunk
} from "../../container/Home/action";
import {
  getBreedDetails,
  getDogsImageRandomlySelector,
  getBreedList,getErrorState
} from "../../container/Home/selector";
import Header from "../../components/Header";
import { Carousel } from "../../components/Carousel";
import { BreedList } from "../../components/BreedList";
import { withAlert } from "react-alert";

class Home extends Component {
  componentDidMount() {
    this.props.getRandomDogsThunk();
    this.props.getBreedListThunk();
  }

  handleBreedDetail=()=>{
   this.props.getBreedDetailsThunk()
  }

  render() {
    const { randomDogsImage,breedList,error,alert } = this.props;
    if(error){
      alert.error(error);
    }
    return (
      <div className="homepage">
        <Carousel data={randomDogsImage} />
        <BreedList breedList={breedList} handleBreedDetail={this.handleBreedDetail}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  breedDetails: getBreedDetails(state),
  randomDogsImage: getDogsImageRandomlySelector(state),
  breedList:getBreedList(state),
  error: getErrorState(state)
});

const mapDispatchToProps = (dispatch) => ({
  getBreedDetails: () => dispatch(getBreedDetailsThunk()),
  getRandomDogsThunk: () => dispatch(getDogsRandomlyThunk()),
  getBreedListThunk:()=> dispatch(getBreedsThunk())
});

const alertComponent = withAlert()(Home)
export default connect(mapStateToProps, mapDispatchToProps)(alertComponent);
