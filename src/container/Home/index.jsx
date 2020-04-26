import React, {Component} from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import {connect} from "react-redux";
import {getDogsThunk} from "./action";
import {getDogsImage} from "./selector";


class Home extends Component {
    componentDidMount() {
        this.props.getDogsThunk();
    }

    render() {
        const {dogs} = this.props;
        return (
            <div>
                {dogs.data && dogs.data.message.slice(0,50).map((image) => (
                    <img src={image} className="App-logo" alt="logo" />
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    dogs: getDogsImage(state)
})

const mapDispatchToProps = (dispatch) => ({
    getDogsThunk: () => dispatch(getDogsThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
