import { Link } from "react-router-dom";
import styles from "./NavBarHandler.module.css";

export const NavBar = () => {
  const nav = [
    {title: "Home",to: "/"},
    { title: "Login", to: "/login" },
    { title: "Logout", to: "/logout" },
    { title: "Status", to: "/status" }
  ];
  return (
    <>
  
      <div className={styles.navBar}>
      {nav.map((e,i)=>(
          <Link to={e.to} key={i}>{e.title}</Link>     ))}
      </div>
    </>
  );
};
