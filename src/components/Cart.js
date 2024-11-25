import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = () =>{
    const cartItems =useSelector((store)=>store.cart.items);

    return (<div className="text-center m-10 p-10">
        <h1 className="text-2xl fonr-bold m-24">Cart</h1>
        <div>
            <ItemList items={cartItems}/>
        </div>
    </div>
    );    
};

export default Cart;