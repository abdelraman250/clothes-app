import ShopCart from "./components/shopCart";
import { useState, useEffect } from "react";
import Header from "./components/header";
import "./App.css";
import Products from "./components/Products";
import ShoppingConText from "./components/shoppingContext";

function App() {
  // getting data from api
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState([]);
  const [category, setcategory] = useState([]);
  const [shopCart, setshopcart] = useState([
    ...(localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items"))
      : []),
  ]);

  let tempData = [...data];

  useEffect(() => {
    try {
      setloading(true);
      fetch("https://fakestoreapi.com/products").then((response) => {
        if (!response.ok) {
          setloading(false);
          throw Error("there are no response ");
        }
        return response.json().then((alldata) => {
          setdata(alldata);
          setloading(false);
        });
      });
    } catch (error) {}
  }, []);

  return (
    <ShoppingConText.Provider
      value={{
        shopCart,
        setshopcart,
        category,
        setcategory,
        data,
        setdata,
        loading,
        setloading,
        tempData
      }}
    >
      <div className="App" id="App">
        <Header />
        <Products />
        <ShopCart />
      </div>
    </ShoppingConText.Provider>
  );
}

export default App;
