import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/about'
import Services from './Components/services'
import Gallery from './Components/gallery';
import Contact from './Components/contact';
import Booking from './page/book';
import Submit from './page/submit';
import { connect } from "react-redux";
import ProtectedRoute from "./controllers/ProtectedRoute";
import Homes from "./controllers/Homes";
import Login from "./controllers/Login";

function App(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
    <>
    <Switch>
    <ProtectedRoute
         exact
         path="/"
         component={Homes}
         isAuthenticated={isAuthenticated}
         isVerifying={isVerifying}
       />
    <Route path="/login" component={Login} />
    <Route exact path="/Home" component={Home} />
    <Route exact path="/about/" component={About} />
    <Route exact path="/services/" component={Services} />
    <Route exact path="/gallery/" component={Gallery} />
    <Route exact path="/contact/" component={Contact} />
    {/* <Route exact path="/sign_out/" component={SignUp} /> */}
    <Route exact path="/book/" component={Booking} />
    <Route exact path="/submit" component={Submit} />
    <Route exact path="/Home" component={Home}/>
    </Switch>
    
    </>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}
export default connect(mapStateToProps)(App);

// export default App;
