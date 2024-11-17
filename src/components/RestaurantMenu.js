import { useEffect, useState } from 'react';
import React from 'react';
import ShimmerCard from './ShimmerCard';
import { useParams } from "react-router-dom";
import { MENU_API } from '../utils/constants';


// Exporting the CDN_URL constant
export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const RestaurantMenu = () => {
const [resInfo, setResInfo] = useState(null);

const {resId} = useParams();


  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API+resId);
    const json = await data.json();


    setResInfo(json?.data);
  };

  if(resInfo==null) return <ShimmerCard/>;

  const {name,costForTwoMessage,cuisines,avgRating} =
   resInfo?.cards[2]?.card?.card?.info;

  const {itemCards} =
   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);


  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{costForTwoMessage}</h3>
      <h3>{cuisines?.join(", ")}</h3>
      <h3>{avgRating}</h3>
      <h2>Menu</h2>

      <ul>
                {itemCards.map(item => (<li key={item.card.info.id}>
                    {item.card.info.name} - 
                    {item.card.info.defaultPrice/100 || item.card.info.price/100}</li>))}
            </ul>
        </div>

  );
};

export default RestaurantMenu;
