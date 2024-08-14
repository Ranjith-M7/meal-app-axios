import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

function Main() {
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((response) => setItemsList(response.data.meals))
      .catch((err) => console.log(err));
  }, []);

  console.log(itemsList);

  const items = itemsList.map((item) => (
    <div className="card shadow">
      <img src={item.strMealThumb} alt="" />
      <div className="content">
        <p>{item.strMeal}</p>
        <p>#{item.idMeal}</p>
      </div>
    </div>
  ));

  return (
    <>
      <h1 className="text-center mt-5">Sea Food</h1>
      <div className="items-container">{items}</div>
    </>
  );
}

export default Main;
