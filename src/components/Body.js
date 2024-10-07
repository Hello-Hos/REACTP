import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerCard from "./ShimmerCard"; 

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        console.log(json);

        //Conditional Rendering
        setListOfRestaurants(json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
        setIsLoading(false);
    };

    return (
        <div className="body">
            <div className="filter">
                
                <button 
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => parseFloat(res.info.avgRating) > 4.5
                            
                        );
                        // console.log("done");
                        setListOfRestaurants(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
                <div className="search">
                    <input type="text" placeholder="Search for restaurants..." className="search-input"/>
                    <button className="search-btn">Search </button>
                </div>
            </div>
            <div className="res-container">
                {isLoading ? (
                    [...Array(10)].map((_, index) => <ShimmerCard key={index} />)
                ) : (
                    listOfRestaurants.map((resData) => (
                        <RestaurantCard
                            key={resData.info.id}
                            resData={resData}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default Body;
