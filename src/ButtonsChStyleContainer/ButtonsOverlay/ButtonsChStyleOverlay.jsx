import "./buttonschstyleoverlay.scss";

const btns = [
  { id: 1, name: "slide" },
  { id: 2, name: "elastic" },
  { id: 3, name: "bubble" },
  { id: 4, name: "fall" },
  { id: 5, name: "rotate" },
  { id: 6, name: "matrix" },
  { id: 7, name: "scale" },
];

export const ButtonsChStyleOverlay = ({ chOverlayStyle, focus }) => {
  return (
    <div className="buttons-ch-style-overlay_block">
      <h2>
        Collection of effects and styles using CSS for overlay to burger pop-up
      </h2>
      <div className="_flex_block">
        {btns.map((el) => (
          <button
            key={el.id}
            name={el.name}
            id="overlay-btn"
            className={focus === el.name ? "focus_true" : "focus_false"}
            onClick={(e) => chOverlayStyle(e.target.name)}
          >
            {el.name}
          </button>
        ))}
      </div>
    </div>
  );
};
