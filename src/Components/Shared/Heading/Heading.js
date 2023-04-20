import cls from "classnames";
// ================== css ====================
import "./Heading.css";
import { Button } from "antd";
function Heading(props) {
  let { title, type, size, addClassName, isButton = true } = props;

  const classes = cls(
    "heading",
    {
      "heading-default": type === "heading-default",
      "btn-size-large": size === "large",
    },
    addClassName
  );

  return (
    <div className="heading-body">
      <h2 className={classes}>{title}</h2>
      {isButton && <Button> Xem thêm</Button>}
    </div>
  );
}

export default Heading;
