import { useState } from "react";

function ColorMode() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    const bodyClass = document.body.classList;
    if (darkMode) {
      bodyClass.remove("bg-dark", "text-light");
      bodyClass.add("bg-light");
    } else {
      bodyClass.remove("bg-light");
      bodyClass.add("bg-dark", "text-light");
    }
  };
  return (
    <>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          aria-label="Color Mode"
          onClick={toggleTheme}
        />
        {darkMode ? "Light Mode" : "Dark Mode"}
      </div>
    </>
  );
}

export default ColorMode;
