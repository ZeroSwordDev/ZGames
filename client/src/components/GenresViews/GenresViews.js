import React from "react";
import './GenresViews.css'

const GenresViews = ({genre}) => {




  return  (
   
  <option value={genre.name} > {genre.name}</option>
 
      )

};

export default GenresViews;
