import { IconLoading } from "../Icons/Icons";
import "./Button.css";

import cls from "classnames";
function Button(props) {
  let {
    children,
    type,
    size,
    className,
    htmlType = "button",
    as = "button",
    isIcon,
    IconPos = "left",
    icon = <IconLoading />,
    ...propsRest
  } = props;

  const classes = cls(
    "btn",
    {
      "btn-default": type === "default",
      "btn-category": type === "category",
      "btn-primary": type === "primary",
      "btn-default-login": type === "btn-default-login",
      "btn-default-cancel": type === "btn-default-cancel",
      "btn-size-large": size === "large",
      smoll: size === "smoll",
    },
    className
  );

  let content = (
    <>
      {isIcon && IconPos === "left" && icon}
      {children}
      {isIcon && IconPos === "right" && icon}
    </>
  );

  const injectedProps = {
    className: classes,
    type: htmlType,
    ...propsRest,
  };

  if (as === "link") {
    return <a {...injectedProps}>{content}</a>;
  }

  return (
    <>
      <button {...injectedProps}>{content}</button>
    </>
  );
}

export default Button;
