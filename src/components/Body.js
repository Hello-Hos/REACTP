import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerCard from "./ShimmerCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [SearchText, setSearchText] = useState(''); 
    const [filteredRestaurants, setFilteredRestaurants] = useState([]); 

    // const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

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

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) 
        return (
            <h1 className="text-center text-lg font-bold text-red-600">
                You are currently offline! Check your internet status.
            </h1>
        );

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
        <div className="p-20">
            {/* Filter Section */}
            <div className="flex justify-between items-center mx-6 mt-[90px] p-4 bg-white rounded-lg shadow-md">
                <button 
                    className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-transform transform hover:scale-105"
                    onClick={() => {
                        const topRatedList = listOfRestaurants.filter(
                            (res) => parseFloat(res.info.avgRating) > 4.5
                        );
                        setFilteredRestaurants(topRatedList);
                    }}
                >
                    Top Rated Restaurants
                </button>
                <div className="flex items-center">
                    <input 
                        type="text" 
                        placeholder="Search for restaurants..." 
                        className="px-4 py-2 w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                        value={SearchText} 
                        onChange={(e) => {
                            setSearchText(e.target.value);
                            handleSearch(); 
                        }}
                    />
                    <button 
                        className="ml-2 px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-transform transform hover:scale-105"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>
            </div>

            {/* Restaurant Cards Section */}
            <div className="res-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {isLoading ? (
                    [...Array(10)].map((_, index) => (
                        <ShimmerCard key={index} />
                    ))
                ) : (
                    filteredRestaurants.map((resData) => (
                        <Link 
                            key={resData.info.id} 
                            to={"/restaurants/" + resData.info.id} 
                            className="text-inherit no-underline"
                        >
                            {/* {resData.info.promoted ? (
                                <RestaurantCardPromoted resData={resData} />
                            ) : (
                                <RestaurantCard resData={resData} />
                            )} */}
                            <RestaurantCard resData={resData} />
                        </Link>
                    ))
                    
                )}
            </div>
        </div>
    );
};

export default Body;