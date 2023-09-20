import "./buttonschstyleburger.scss"

const btns = [
  {id: 1, name: "Hamburger"},
  {id: 2, name: "Hamburger2"},
  {id: 3, name: "Hamburger3"},
  {id: 4, name: "Hamburger4"},
  {id: 5, name: "Two-lines"},
  {id: 6, name: "Two-lines2"},
  {id: 7, name: "Arrow"},
  {id: 8, name: "Arrow2"},
  {id: 9, name: "Kebab"},
  {id: 10, name: "Hot-dog"},
  {id: 11, name: "Fries"},
  {id: 12, name: "Strawberry"},
  {id: 13, name: "Chocolate"},
]

export const ButtonsChStyleBurger = ({ chBurgerStyle, focus }) => {
  return (
    <div className="buttons-ch-style-burger_block">
      <h2>
        Collection of effects and styles using CSS for burger
      </h2>
      <div className="_flex_block">
        {btns.map((el) => (
          <button
            key={el.id}
            name={el.name}
            id="burger-btn"
            className={focus === el.name ? "focus_true" : "focus_false"}
            onClick={(e) => chBurgerStyle(e.target.name)}
          >
            {el.name}
          </button>
        ))}
      </div>
    </div>
  );
};