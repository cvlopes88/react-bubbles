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
        {/* <Route 
       exact path='/protected'
        render={props => {
         return <BubblePage  {...props}/>
        }}
        /> */}
      <PrivateRoute  path='/protected'
      render={props => {
        return <BubblePage  {...props}/>
      }}
      component={BubblePage}/>
      {/* <Route   path='/colorList/:id' 
      render={props => 
         <ColorList   {...props} />
      }
      /> */}
      </div>
    </Router>
  );
}

export default App;
