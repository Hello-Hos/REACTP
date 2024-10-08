import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerCard from "./ShimmerCard";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [SearchText, setSearchText] = useState(''); 
    const [filteredRestaurants, setFilteredRestaurants] = useState([]); 

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        const restaurants = json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        setListOfRestaurants(restaurants);
        setFilteredRestaurants(restaurants);
        setIsLoading(false);
    };

    const handleSearch = () => {
         // if search box is empty then show all restaurants
        if (SearchText === "") {
            setFilteredRestaurants(listOfRestaurants);
        } else {
            const filteredList = listOfRestaurants.filter((res) => 
                res.info.name.toLowerCase().includes(SearchText.toLowerCase()) 
            );
            setFilteredRestaurants(filteredList);
        }
    };

    return (
        <div className="body">
            <div className="filter">
                <button 
                    className="filter-btn"
                    onClick={() => {
                        const topRatedList = listOfRestaurants.filter(
                            (res) => parseFloat(res.info.avgRating) > 4.5
                        );
                        setFilteredRestaurants(topRatedList);
                    }}
                >
                    Top Rated Restaurants
                </button>
                <div className="search">
                    <input type="text" placeholder="Search for restaurants..." className="search-input"value={SearchText} 
                            onChange={(e) => {
                            setSearchText(e.target.value);
                            handleSearch(); 
                        }}
                    />
                    <button className="search-btn"onClick={handleSearch}>Search</button>
                </div>
            </div>
            <div className="res-container">
                {isLoading ? (
                    [...Array(10)].map((_, index) => <ShimmerCard key={index} />)) : 
                    (filteredRestaurants.map((resData) => (
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
