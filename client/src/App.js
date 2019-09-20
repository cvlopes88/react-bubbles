import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import Login from "./components/Login";
import "./styles.scss";
import BubblePage from './components/BubblePage';
import ColorList from "./components/ColorList";


function App() {
  const [colorList, setColorList] = useState([]);


  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
       
      <PrivateRoute  path='/protected'
      render={props => {
        return <BubblePage  {...props}/>
      }}
      component={BubblePage}/>
     
      </div>
    </Router>
  );
}

export default App;
