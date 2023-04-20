import "./ItemLoading.css";
import cls from "classnames";
function ItemLoading(prop) {
  let { size, countItem = 1 } = prop;

  let className = cls("item-loading", { smoll: size === "smoll" });

  let myArray = new Array(countItem).fill(null);
  return (
    <>
      {myArray.map((i, index) => (
        <div key={index} className={className}></div>
      ))}
    </>
  );
}

export default ItemLoading;
