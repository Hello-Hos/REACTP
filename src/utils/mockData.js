const resList = [
    // Existing Restaurant Data
    {
        info: {
            id: "24613",
            name: "Domino's Pizza",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/575855d7-c502-46fe-bb27-b87a192b4d8e_24613.jpg",
            locality: "Stock Exchange Road",
            areaName: "Himayath Nagar",
            costForTwo: "₹400 for two",
            cuisines: [
                "Pizzas",
                "Italian",
                "Pastas",
                "Desserts"
            ],
            avgRating: 4.4,
            parentId: "2456",
            avgRatingString: "4.4",
            totalRatingsString: "19K+",
            sla: {
                deliveryTime: 25,
                lastMileTravel: 1.8,
                serviceability: "SERVICEABLE",
                slaString: "20-25 mins",
                lastMileTravelString: "1.8 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2024-10-03 02:59:00",
                opened: true
            },
            isOpen: true,
            type: "F",
        },
        cta: {
            link: "https://www.swiggy.com/city/hyderabad/dominos-pizza-stock-exchange-road-himayath-nagar-rest24613",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "355747",
            name: "Grameen Kulfi",
            cloudinaryImageId: "mwggy9gmdboqzi7gloms",
            locality: "KMIT",
            areaName: "Narayanguda",
            costForTwo: "₹120 for two",
            cuisines: [
                "Ice Cream",
                "Desserts"
            ],
            avgRating: 4.6,
            veg: true,
            parentId: "12175",
            avgRatingString: "4.6",
            totalRatingsString: "1.4K+",
            sla: {
                deliveryTime: 23,
                lastMileTravel: 2.3,
                serviceability: "SERVICEABLE",
                slaString: "20-25 mins",
                lastMileTravelString: "2.3 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2024-10-02 23:00:00",
                opened: true
            },
            isOpen: true,
            type: "F",
        },
        cta: {
            link: "https://www.swiggy.com/city/hyderabad/grameen-kulfi-kmit-narayanguda-rest355747",
            type: "WEBLINK"
        }
    },
    // New Restaurant Data
    {
        info: {
            id: "681558",
            name: "LeanCrust Pizza- ThinCrust Experts",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/30/a20e42c4-6c14-4d44-a46f-600979577611_681558.jpg",
            locality: "Ashok Nagar",
            areaName: "Vidyanagar",
            costForTwo: "₹300 for two",
            cuisines: [
                "Pizzas",
                "Italian",
                "Desserts"
            ],
            avgRating: 4.3,
            parentId: "11216",
            avgRatingString: "4.3",
            totalRatingsString: "471",
            sla: {
                deliveryTime: 25,
                lastMileTravel: 3.7,
                serviceability: "SERVICEABLE",
                slaString: "20-30 mins",
                lastMileTravelString: "3.7 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2024-10-03 01:00:00",
                opened: true
            },
            isOpen: true,
            type: "F",
        },
        cta: {
            link: "https://www.swiggy.com/city/hyderabad/leancrust-pizza-thincrust-experts-ashok-nagar-vidyanagar-rest681558",
            type: "WEBLINK"
        }
    },
    {
        info: {
            id: "622148",
            name: "MOJO Pizza - 2X Toppings",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/1c21e4ed-37c9-45b2-9788-1fee96413482_622148.JPG",
            locality: "Ashok Nagar",
            areaName: "Vidyanagar",
            costForTwo: "₹250 for two",
            cuisines: [
                "Pizzas",
                "Italian",
                "Fast Food",
                "Desserts"
            ],
            avgRating: 4.3,
            parentId: "11329",
            avgRatingString: "4.3",
            totalRatingsString: "755",
            sla: {
                deliveryTime: 25,
                lastMileTravel: 3.7,
                serviceability: "SERVICEABLE",
                slaString: "20-30 mins",
                lastMileTravelString: "3.7 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2024-10-03 01:00:00",
                opened: true
            },
            isOpen: true,
            type: "F",
        },
        cta: {
            link: "https://www.swiggy.com/city/hyderabad/mojo-pizza-2x-toppings-ashok-nagar-vidyanagar-rest622148",
            type: "WEBLINK"
        }
    },
        
      {
        info: {
          id: "750342",
          name: "Daily Kitchen - Homely Meals",
          cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/741d7d41-1341-4358-b6e0-cc22b8e82f9a_750342.JPG",
          locality: "Golkonda X Road",
          areaName: "Ashok Nagar",
          costForTwo: "₹400 for two",
          cuisines: [
            "Home Food",
            "Indian",
            "North Indian",
            "Thalis"
          ],
          avgRating: 4.3,
          totalRatingsString: "470",
          sla: {
            deliveryTime: 25,
            lastMileTravel: 3.7,
            slaString: "20-30 mins",
            lastMileTravelString: "3.7 km"
          },
          availability: {
            nextCloseTime: "2024-10-03 01:00:00",
            opened: true
          },
          isOpen: true,
          type: "F"
        },
        cta: {
          link: "https://www.swiggy.com/city/hyderabad/daily-kitchen-homely-meals-golkonda-x-road-ashok-nagar-rest750342",
          type: "WEBLINK"
        }
      },
      {
        info: {
          id: "367769",
          name: "Lucky Restaurant",
          cloudinaryImageId: "qems028i3da5rxf81rbp",
          locality: "Banjara Hills",
          areaName: "Masab tank",
          costForTwo: "₹300 for two",
          cuisines: [
            "Biryani",
            "Tandoor"
          ],
          avgRating: 4.1,
          totalRatingsString: "80K+",
          sla: {
            deliveryTime: 27,
            lastMileTravel: 3,
            slaString: "25-30 mins",
            lastMileTravelString: "3.0 km"
          },
          availability: {
            nextCloseTime: "2024-10-02 23:59:00",
            opened: true
          },
          isOpen: true,
          type: "F"
        },
        cta: {
          link: "https://www.swiggy.com/city/hyderabad/lucky-restaurant-banjara-hills-masab-tank-rest367769",
          type: "WEBLINK"
        }
      },
      {
        info: {
          id: "547809",
          name: "Theobroma",
          cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/fa7eeaae-ed3b-437e-a563-335ecc329943_547809.jpg",
          locality: "Himayath Nagar",
          areaName: "Himayath Nagar",
          costForTwo: "₹400 for two",
          cuisines: [
            "Desserts"
          ],
          avgRating: 4.6,
          totalRatingsString: "2.9K+",
          sla: {
            deliveryTime: 13,
            lastMileTravel: 0.7,
            slaString: "10-15 mins",
            lastMileTravelString: "0.7 km"
          },
          availability: {
            nextCloseTime: "2024-10-03 00:30:00",
            opened: true
          },
          isOpen: true,
          type: "F"
        },
        cta: {
          link: "https://www.swiggy.com/city/hyderabad/theobroma-himayath-nagar-rest547809",
          type: "WEBLINK"
        }
      },
      {
        info: {
          id: "356688",
          name: "Baskin Robbins - Ice Cream Desserts",
          cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
          locality: "Wajihuddin",
          areaName: "Himayatnagar",
          costForTwo: "₹300 for two",
          cuisines: [
            "Desserts",
            "Ice Cream"
          ],
          avgRating: 4.6,
          totalRatingsString: "1.5K+",
          sla: {
            deliveryTime: 16,
            lastMileTravel: 1.6,
            slaString: "15-20 mins",
            lastMileTravelString: "1.6 km"
          },
          availability: {
            nextCloseTime: "2024-10-02 23:59:00",
            opened: true
          },
          isOpen: true,
          type: "F"
        },
        cta: {
          link: "https://www.swiggy.com/city/hyderabad/baskin-robbins-ice-cream-desserts-wajihuddin-himayatnagar-rest356688",
          type: "WEBLINK"
        }
      },
      {
        info: {
          id: "183789",
          name: "Bakingo",
          cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/5/8a1efebd-72a6-480f-b165-52dda11fd37d_183789.JPG",
          locality: "Secunderabad",
          areaName: "Begumpet",
          costForTwo: "₹300 for two",
          cuisines: [
            "Bakery",
            "Desserts",
            "Beverages",
            "Snacks"
          ],
          avgRating: 4.5,
          totalRatingsString: "9.6K+",
          sla: {
            deliveryTime: 32,
            lastMileTravel: 4.5,
            slaString: "30-35 mins",
            lastMileTravelString: "4.5 km"
          },
          availability: {
            nextCloseTime: "2024-10-03 00:00:00",
            opened: true
          },
          isOpen: true,
          type: "F"
        },
        cta: {
          link: "https://www.swiggy.com/city/hyderabad/bakingo-secunderabad-begumpet-rest183789",
          type: "WEBLINK"
        }
      },{
        info: {
          id: "142670",
          name: "Shah Ghouse Hotel & Restaurant",
          cloudinaryImageId: "bk26jkkqpg55veii0aj9",
          locality: "Santh Nirankari Satsang Bhavan",
          areaName: "Banjara Hills",
          costForTwo: "₹350 for two",
          cuisines: [
            "Biryani",
            "Chinese",
            "Tandoor",
            "Mughlai"
          ],
          avgRating: 4.3,
          parentId: "19271",
          avgRatingString: "4.3",
          totalRatingsString: "62K+",
          sla: {
            deliveryTime: 27,
            lastMileTravel: 2.7,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "2.7 km"
          },
          availability: {
            nextCloseTime: "2024-10-09 00:00:00",
            opened: true
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-Biryani.png",
                description: "Delivery!"
              },
              {
                imageId: "Rxawards/_CATEGORY-Mughlai.png",
                description: "Delivery!"
              }
            ]
          },
          isOpen: true,
          aggregatedDiscountInfoV3: {
            header: "10% OFF",
            subHeader: "UPTO ₹40"
          }
        },
        cta: {
          link: "https://www.swiggy.com/city/hyderabad/shah-ghouse-hotel-and-restaurant-santh-nirankari-satsang-bhavan-banjara-hills-rest142670",
          type: "WEBLINK"
        }
      },
      {
        info: {
          id: "296084",
          name: "Haiking Chinese Restaurant",
          cloudinaryImageId: "3028bbfce92b7148ab80c8fd5edac81d",
          locality: "Himayath Nagar",
          areaName: "Himayath Nagar",
          costForTwo: "₹700 for two",
          cuisines: [
            "Chinese",
            "Asian",
            "Seafood",
            "Pan-Asian"
          ],
          avgRating: 4.3,
          parentId: "19196",
          avgRatingString: "4.3",
          totalRatingsString: "5.2K+",
          sla: {
            deliveryTime: 25,
            lastMileTravel: 1.6,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "1.6 km"
          },
          availability: {
            nextCloseTime: "2024-10-02 22:45:00",
            opened: true
          }
        },
        cta: {
          link: "https://www.swiggy.com/city/hyderabad/haiking-chinese-restaurant-himayath-nagar-rest296084",
          type: "WEBLINK"
        }
      },
      {
        info: {
          id: "404999",
          name: "BOX8 - Desi Meals",
          cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/605f62e7-6355-4413-a55a-8d8d0fcab81f_404999.jpg",
          locality: "Ashok Nagar",
          areaName: "Vidyanagar",
          costForTwo: "₹200 for two",
          cuisines: [
            "North Indian",
            "Biryani",
            "Thalis",
            "Home Food"
          ],
          avgRating: 4.4,
          parentId: "10655",
          avgRatingString: "4.4",
          totalRatingsString: "2.5K+",
          sla: {
            deliveryTime: 25,
            lastMileTravel: 3.7,
            serviceability: "SERVICEABLE",
            slaString: "20-30 mins",
            lastMileTravelString: "3.7 km"
          },
          availability: {
            nextCloseTime: "2024-10-03 01:00:00",
            opened: true
          },
          badges: {
            imageBadges: [
              {
                imageId: "Green%20Dot%20Awards/Best%20In%20Dal%20Makhani.png",
                description: "Delivery!"
              }
            ]
          }
        },
        cta: {
          link: "https://www.swiggy.com/city/hyderabad/box8-desi-meals-ashok-nagar-vidyanagar-rest404999",
          type: "WEBLINK"
        }
      },
 
];

export default resList;