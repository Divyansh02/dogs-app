import React, { Component } from "react";
import "./index.css";
import { connect } from "react-redux";
import {
  getDogsRandomlyThunk,
  getBreedsThunk
} from "../../container/Home/action";
import {
  getDogsImageRandomlySelector,
  getBreedList,getErrorState
} from "../../container/Home/selector";                   
import { Carousel } from "../../components/Carousel";
import { BreedList } from "../../components/BreedListCollectionHomePage";
import { withAlert } from "react-alert";



interface HomePageProps{
  getRandomDogsThunk:()=>{};
  getBreedListThunk:()=>{};
  history:any;
  randomDogsImage:Array<string>;
  breedList:any;
  error:string;
  alert:any
}

class Home extends Component<HomePageProps,{}> {
  componentDidMount() {
    this.props.getRandomDogsThunk();
    this.props.getBreedListThunk();
  }

  handleLogout=():void => {
    localStorage.removeItem("user")
    this.props.history.push('/login')
  }

  render():React.ReactNode {
    const { randomDogsImage,breedList,error,alert } = this.props;
    if(error){
      alert.error(error);
    }
    return (
      <div className="homepage">
        <button type="submit" onClick={this.handleLogout}>Logout</button>
        <Carousel data={randomDogsImage} />
        <BreedList breedList={breedList}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  randomDogsImage: getDogsImageRandomlySelector(state),
  breedList:getBreedList(state),
  error: getErrorState(state)
});

const mapDispatchToProps = (dispatch) => ({
  getRandomDogsThunk: () => dispatch(getDogsRandomlyThunk()),
  getBreedListThunk:()=> dispatch(getBreedsThunk())
});

const alertComponent = withAlert()(Home)
export default connect(mapStateToProps, mapDispatchToProps)(alertComponent);
