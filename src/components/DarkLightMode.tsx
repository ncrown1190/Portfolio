import { useEffect, useState } from "react";
import "./DarkLightMode.css";

export default function DarkLightMode() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // const lightMode = "Light Mode  ";
  // const darkMode = "Dark Mode  ";
  return (
    <div className="rightAlign">
      <div className="darklight" onClick={toggleTheme}>
        <label>
          {theme === "light" ? (
            <p>
              {/* {darkMode} */}

              <i className="fa-regular fa-moon icondiv"></i>
            </p>
          ) : (
            <p>
              {/* {lightMode} */}
              <i className="fa-regular fa-sun icondiv"></i>
            </p>
          )}
        </label>
      </div>
    </div>
  );
}
