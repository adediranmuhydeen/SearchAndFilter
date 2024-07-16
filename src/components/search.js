import React, { useState } from "react";
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

  const [fruitsData, setFruitsData]  = useState(fruits);
  const [seachItem, setSearchItem] = useState("");

  const filteredFruits = fruitsData.filter((fruit) => fruit.toLowerCase().includes(seachItem.toLowerCase()) );

  const handleInput = (e) =>{
    setSearchItem(e.target.value);
    console.log(seachItem)
  };
    return(
      <div className="container">
        <input type="text" placeholder="Search here ..." onChange={handleInput}/>
        {filteredFruits.map((fruit)=>{
          return <p>{fruit}</p>
        })}
      </div>
    )
  
}

export default Search;