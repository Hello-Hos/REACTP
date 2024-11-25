import React, { useEffect } from 'react';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from './components/Contact';
import Error from "./components/Error";
import RestaurantMenu from './components/RestaurantMenu';
import Footer from './components/Footer';
import logo from "./utils/logo.png"; 
import { Provider} from "react-redux";
import appStore from './utils/appStore';
import Cart from './components/Cart';

// AppLayout component
const AppLayout = () => {
    // UseEffect to dynamically set the favicon
    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'icon';
        link.type = 'image/png';
        link.href = logo; // Set the imported favicon
        document.head.appendChild(link);
    }, []);

    return (
            <Provider store={appStore}>
        <div className="app min-h-screen flex flex-col">
            <Header />
            <div className="main-content flex-grow">
                <Outlet />
            </div>
            <Footer />
        </div>
        </Provider>
    );
};

// Define the routes using createBrowserRouter
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />, 
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,    
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            },
            {
                path: "/cart",
                element: <Cart/>,
            }
        ],
        errorElement: <Error />,
    },
]);

// Rendering the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
