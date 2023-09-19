import { useRef, useState } from "react";
import { Burger } from "./components/Burger/Burger";
import { OverlayMenuPopUp } from "./components/OverlayMenuPopUp/OverlayMenuPopUp";

import "./burgerandoverlayblock.scss";

export const BurgerAndOverlayBlock = ({ chOverlayStyle, chBurgerStyle }) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const ref = useRef();

  return (
    <>
      {/* Burger button*/}
      <Burger
        showPopUp={setShowPopUp}  //func close pop-up
        chPopUp={showPopUp} // check pop-up 
        // hamburger, hamburger2, hamburger3, hamburger4, two-lines, two-lines2, arrow, arrow2
        burgerStyle={chBurgerStyle} // style burger button
        // hidden  // hidden close button
        colorBurger={""} // color burger button
        colorCloseBurger={""} // color close burger button
      />
      {/* end */}

      {/* PopUp block */}
      {showPopUp && (
        <>
          <OverlayMenuPopUp
            ref={ref} // need for REFS !important
            showPopUp={setShowPopUp} // func to close pop-up on overlay
            overlayColor={""} // color of overlay (default rgba(0, 0, 0, 0.3))
            time={""} // time of open pop-up (default 1s)
            width={""} // width overlay (default 100vw)
            //name styles overlay
            //"slide", "elastic", "bubble", "fall", "rotate", "matrix", "scale"
            overlayStyle={chOverlayStyle ?? chOverlayStyle} // order of style animation
          >
            {/* this block is custom.  */}
            <div className="menu">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/aboutus">About Us</a>
                </li>
                <li>
                  <a href="/history">History</a>
                </li>
                <li>
                  <a href="/contacts">Contacts</a>
                </li>
              </ul>
              {/* close pop-up button */}
              <button className="close-btn" onClick={() => setShowPopUp(false)}>
                X
              </button>
              {/* end button */}
              {/* end block */}
            </div>
          </OverlayMenuPopUp>
        </>
      )}
      {/* end pop-up block */}
    </>
  );
};
