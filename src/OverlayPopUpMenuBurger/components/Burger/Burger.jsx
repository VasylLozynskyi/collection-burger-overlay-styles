import { useEffect, useState } from "react";
import "./burger.scss";

export const Burger = ({
  showPopUp,
  burgerStyle,
  chPopUp,
  hidden,
  colorBurger,
  colorCloseBurger,
}) => {
  const [onHandler, setOnHandler] = useState(false);
  useEffect(() => {
    setOnHandler(chPopUp);
  }, [chPopUp]);
  return (
    <div
      className="burger_container"
      onClick={() => {
        showPopUp(!onHandler);
      }}
      style={{
        zIndex: hidden && 0,
      }}
    >
      <div
        className={`burger ${
          burgerStyle.length !== 0 && burgerStyle !== undefined
            ? burgerStyle.toLowerCase()
            : ""
        } ${chPopUp ? "open" : ""}`}
        style={{
          display: hidden && chPopUp && "none",
          "--colorBurger": colorBurger.length !== 0 ? colorBurger : "#212121",
          "--colorCloseBurger":
            colorCloseBurger.length !== 0 ? colorCloseBurger : "aqua",
        }}
      >
        {burgerStyle.toLowerCase() === "hamburger" && (
          <>
            <div className="icon-left"></div>
            <div className="icon-right"></div>
          </>
        )}
        {(burgerStyle.toLowerCase() === "hamburger2" ||
          burgerStyle.toLowerCase() === "two-lines" ||
          burgerStyle.toLowerCase() === "two-lines2" ||
          burgerStyle.toLowerCase() === "arrow" ||
          burgerStyle.toLowerCase() === "arrow2") && (
          <>
            <div className="icon"></div>
          </>
        )}
        {(burgerStyle.toLowerCase() === "hamburger3" ||
          burgerStyle.toLowerCase() === "hamburger4") && (
          <>
           <div className="icon-E"></div>
           <div className="icon-X"></div>
          </>
        )}
      </div>
    </div>
  );
};
