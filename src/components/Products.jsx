import { useContext } from "react";
import Product from "./Product";
import ShoppingConText from "./shoppingContext";

export default function Products() {
  const { loading, data, setcategory } = useContext(ShoppingConText);

  function filtering(ele) {
    const filteredData = data.filter((element) => {
      return element.category === `${ele}`;
    });
    return filteredData;
  }

  if (loading) {
    return <p>loading.................</p>;
  }
  const listOfCategories = ["Men's clothing", "Women's clothing", "Jewelery", "Electronics"];
  return (
    <div>
      <div>
        <ul>
          <li onClick={() => {setcategory(data);}}>All</li>
          {listOfCategories.map((list, index) => {
            return (
              <li
                key={index}
                onClick={(e) => {
                  setcategory(filtering(e.currentTarget.textContent.toLocaleLowerCase()));
                }}
              >
                {list}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h1 style={{ textAlign: "center" }}>Products</h1>
        <div className="divcard" id="divcard">
          <Product />
        </div>
      </div>
    </div>
  );
}
