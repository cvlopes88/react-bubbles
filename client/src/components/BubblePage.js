import React, { useState, useEffect } from "react";

import { axiosWithAuth } from './axiosWithAuth';
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = (props) => {
  console.log(props)
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property


  useEffect(() => {
    axiosWithAuth()
    .get('/colors')
    .then(res => setColorList(res.data))
   },[])
 

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} {...props} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
