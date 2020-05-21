import React, { Component } from "react";
import "./index.css";
import { Header } from "../../components/Header";
import {SignInThunk} from "../../container/authentication/action"
import {handleSignInError} from "../../container/authentication/selector"
import { connect } from "react-redux";
import { withAlert } from "react-alert";

interface SignInState{
  user: string;
  password: string
}

interface SignInProps{
  history:any;
  error:string;
  alert:any;
  validateSignInThunk:(user,password,callback)=>void;
}

 class SignIn extends Component <SignInProps,SignInState>{
  state = {
    user: '',
    password: ''
  };

  componentDidMount(){
      if(localStorage.getItem("user")){
          this.clearInput()
          this.props.history.goBack();
      }
  }

  clearInput=():void=>{
    this.setState({
      user:'',
      password:''
    })
  }

  handleEmail = (e):void => {
    this.setState({
      user: e.target.value,
    });
  };

  handlePassword = (e):void => {
    this.setState({
      password: e.target.value,
    });
  };

  onSignInCallback =({status}:{status:boolean}):void => {
    console.log("onSignInCallback")
    if(status){
      localStorage.setItem("user","user")
      this.props.history.push('/');
    }
    this.setState({
      user:'', password:''
    })
  };

  handleSubmit = (e):void => {
    e.preventDefault();
    const { user, password } = this.state;
    const callback =this.onSignInCallback;
    this.props.validateSignInThunk(user, password,callback);
  };
  render():React.ReactNode {
    const { error,alert } = this.props;
    if(error){
      alert.error(error);
    }
    const {user,password}=this.state;
    return (
      <div className="signin-container">
        <Header header={process.env.REACT_APP_REGISTERATION} />
        <form className="input-fields"  >
          <label htmlFor="user">
            User Name
            <input
              type="text"
              className="user"
              name="user"
              onChange={this.handleEmail}
              value={user}
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              type="password"
              className="password"
              name="password"
              onChange={this.handlePassword}
              value={password }
            />
          </label>
          <button
            type="submit"
            className="button"
            value="Sign In"
            onClick={this.handleSubmit}
          >Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: handleSignInError(state)
});

const mapDispatchToProps = (dispatch) => ({
  validateSignInThunk: (user, password,callback) => dispatch(SignInThunk(user, password,callback))
});


const alertComponent = withAlert()(SignIn)
export default connect(mapStateToProps, mapDispatchToProps)(alertComponent);
