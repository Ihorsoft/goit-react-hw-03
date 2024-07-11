import { useState } from "react";
import s from "./ColorPicker.module.css";
import colors from "./color.json";

const ColorPicker = () => {
  const [currentColor, setCurrentColor] = useState("white");

  const handleChangeColor = (color) => {
    console.log("color", color);
    setCurrentColor(color);
  };

  return (
    <div>
      <section className={s.bgWrapper}>
        <div className={s.pallette}>
          <h1>Current color: {currentColor}</h1>
          <ul className={s.list}>
            {colors.map((item) => (
              <li
                onClick={() => handleChangeColor(item.color)}
                className={s.item}
                key={item.id}
              >
                {item.color}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};
export default ColorPicker;
