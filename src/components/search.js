import React from "react";
//import './search.css';

function Search  (){
  const fruits =[
    "Apple",
    "Apricot",
    "Banana",
    "Blueberry",
    "Cherry",
    "Cranberry",
    "Date",
    "Dragonfruit",
    "Fig",
    "Grape",
    "GrapeFruit",
    "Mango",
  ];
  
    return(
      <div className="container">
        <input type="text" placeholder="Search here ..." />
        {fruits.map((fruit)=>{
          return <p>{fruit}</p>
        })}
      </div>
    )
  
}

export default Search;