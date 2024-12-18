import React from "react";

const RestaurantCard = ({
    id,
    image,
    name,
    type,
    rating,
    number_of_votes,
    price_starts_from,
    handleDeleteRestaurant
  }) => {
   
  return (
    <div style={{border:"1px solid white", margin:"10px"}}>
        <img src={image} alt="" />
        <p>Name: {name}</p>
        <p>Type: {type}</p>
        <p>rating: {rating}</p>
        <p>Number of Votes: {number_of_votes}</p>
        <p>Price starts from : {price_starts_from}</p>
        <button onClick={()=>handleDeleteRestaurant(id)}>delete</button>
    </div>
  )
};

export default RestaurantCard;
