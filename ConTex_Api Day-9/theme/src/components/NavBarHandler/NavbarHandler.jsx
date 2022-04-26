import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

export const NavBar = () => {
  const { theme, handleTheme, style } = useContext(ThemeContext);
  const [th, setTh] = useState(true);
  const nav = [
    { title: "Home", to: "/" },
    { title: "Login", to: "/login" },
    { title: "Logout", to: "/logout" },
    { title: "Status", to: "/status" },
  ];
  const handleThe = () => {
    handleTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <>
      <div style={style}>
        {nav.map((e, i) => (
          <Link to={e.to} key={i}>
            {e.title}
          </Link>
        ))}
        <button onClick={handleThe}>Toggle Theme</button>
      </div>
    </>
  );
};
