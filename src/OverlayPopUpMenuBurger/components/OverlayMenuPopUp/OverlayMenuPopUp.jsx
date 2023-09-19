import { forwardRef } from "react";
import "./overlaymenupopup.scss";

export const OverlayMenuPopUp = forwardRef(
  ({ overlayStyle, showPopUp, overlayColor, time, width, ...props }, ref) => {
    return (
      <div
        ref={ref}
        style={{ backgroundColor: overlayColor, animationDuration: `${time}s`, width: width  }}
        id="overlay"
        className={`${(overlayStyle.length !== 0 && overlayStyle !== undefined) ? overlayStyle.toLowerCase() : "" }`}
        onClick={(e) =>
          e.target.id === "overlay" && typeof showPopUp === "function"
            ? showPopUp(false)
            : null
        }
      >
        {props.children}
      </div>
    );
  }
);
