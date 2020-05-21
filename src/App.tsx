import React from "react";
import "./App.css";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import BreedDetails from "./pages/BreedDetailsPage";
import SubBreedPage from "./pages/SubBreedPage";
import { PrivateRoute } from "./pages/SignIn/PrivateRoute";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const App=():React.ReactElement=> {
  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate}>
        <Router>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/breedDetails" component={BreedDetails} />
          <PrivateRoute
            exact
            path="/specificSubBreed"
            component={SubBreedPage}
          />
          <Route path="/login" component={SignIn} />
        </Router>
      </AlertProvider>
    </Provider>
  );
}

export default App;
