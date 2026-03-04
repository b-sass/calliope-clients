import styles from "./nav.module.css";
import { Icons } from "../assets/icons/Icons";
import { useState } from "react";

const elements = [
  [Icons.home, "Home"],
  [Icons.book, "Shelf"],
  [Icons.bookmarks, "Bookmarks"],
  [Icons.lan, "Online Library"],
  [Icons.settings, "Settings"],
];

const NavElement = ({
  icon,
  label,
  onClick,
}: {
  icon: any;
  label?: string;
  onClick?: () => void;
}) => {
  return (
    <div className={styles["nav-element"]} onClick={onClick}>
      <img src={icon} />
      {/* Don't render label element if not present */}
      {label ? <p style={{ display: "none" }}>{label}</p> : null}
    </div>
  );
};

const Nav = () => {
  const [navState, setNavState] = useState(false);

  const toggleNav = (navState: boolean) => {
    setNavState(!navState);
    console.log(navState);
  };

  return (
    <div className={styles.nav}>
      <ul className={!navState ? styles["long-nav"] : ""}>
        {/* Hamburger menu icon */}
        <li>
          <NavElement
            icon={Icons.menu}
            onClick={() => {
              toggleNav(navState);
            }}
          />
        </li>
        {/* Rest of icons */}
        {elements.map((e) => {
          console.log(styles.last);
          return (
            <li
              key={e[1]}
              className={`${styles.link} ${e[1] === "Settings" ? styles.last : ""}`}
            >
              <NavElement icon={e[0]} label={e[1]} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { Nav };
