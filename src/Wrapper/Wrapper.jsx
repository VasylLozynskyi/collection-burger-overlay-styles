import { useState } from "react";
import { ButtonsChStyleOverlay } from "../ButtonsChStyleContainer/ButtonsOverlay/ButtonsChStyleOverlay";
import { ButtonsChStyleBurger } from "../ButtonsChStyleContainer/ButtonsBurger/ButtonsChStyleBurger"
import { BurgerAndOverlayBlock } from "../OverlayPopUpMenuBurger/BurgerAndOverlayBlock";

import "./wrapper.scss";

export const Wrapper = () => {
  const [chOverlayStyle, setChOverlayStyle] = useState("slide") // slide - name active button
  const [chBurgerStyle, setChBurgerStyle] = useState("Hamburger") // Hamburger - name active button
  return (
    <div className="wrapper">
      {/* block example  */}
      <div className="container">
        <BurgerAndOverlayBlock chOverlayStyle={chOverlayStyle} chBurgerStyle={chBurgerStyle}  />
      </div>
      {/* end block */}
      {/* block overlays btns collection */}
      <ButtonsChStyleOverlay chOverlayStyle={setChOverlayStyle} focus={chOverlayStyle}/>
      {/* end */}

      {/* block burger btns collection */}
      <ButtonsChStyleBurger chBurgerStyle={setChBurgerStyle} focus={chBurgerStyle}/>
      {/* end */}
    </div>
  );
};
