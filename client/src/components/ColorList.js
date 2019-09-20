import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from './axiosWithAuth';
const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = (props) => {
  console.log('now',props);
  const {colors, updateColors} = props
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);


  

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };
  const id = props.match.params.id;
  useEffect(() => {
  
    const colorUpdate = colors.find(item => `${item.id}` === id);
    if (colorUpdate) {
      setColorToEdit(colorUpdate);
    }
  },[colors])

  const saveEdit = e => {
    
   
      axiosWithAuth()
    .put(`/colors/${colorToEdit.id}`, colorToEdit)
    .then(res => { 
     updateColors(res.data)
    props.history.push(`/colors/${colorToEdit.id}`)
   
    })
    .then(res => {
      console.log("pppput", res)
     setColorToEdit(initialColor)
    })
     .catch(err => {
         console.log(err)
     },[])

  };




  const deleteColor = color => {
    // make a delete request to delete this color
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={() => deleteColor(color)}>
                x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      {/* stretch - build another form here to add a color */}
    </div>
  );
};

export default ColorList;
