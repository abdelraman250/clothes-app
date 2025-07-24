import { useContext } from "react";
import "./css/header.css";
import ShoppingConText from "./shoppingContext";

export default function Header() {
  const { tempData, setcategory } = useContext(ShoppingConText);

  function filtering(ele) {
    const filteredData = tempData.filter((element) => {
      return element.category.match(ele) || element.description.match(ele);
    });
    return filteredData;
  }

  return (
    <div className="header">
      <p>bedo style</p>
      <div>
        <input
          type="search"
          id="search"
          onChange={(e) => {
            setcategory(filtering(e.currentTarget.value));
          }}
        />
      </div>
    </div>
  );
}
