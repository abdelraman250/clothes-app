import { useContext } from "react";
import CardItem from "./carditem";
import ShoppingConText from "./shoppingContext";

export default function ShopCart() {
  const { shopCart } = useContext(ShoppingConText);

  if (shopCart.length === 0) {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>shoping cart {shopCart.length} </h1>
        <div className="divcard" id="divcard">
          <p style={{ color: "gray" }}>your shopping cart is empty</p>
        </div>
      </div>
    );
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>shoping cart {shopCart.length} </h1>
      <div className="divcard" id="divcard">
        <CardItem />
      </div>
    </div>
  );
}
