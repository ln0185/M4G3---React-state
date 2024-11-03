import React, { useState } from "react";

interface HamburgerMenuProps {
  theme: "light" | "dark";
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string>("home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: string) => {
    setActiveItem(item);
    setIsOpen(false);
  };

  const getThemeColors = () => {
    return theme === "dark"
      ? {
          background: "#333",
          text: "#fff",
          shadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",
          active: "#555",
          activeText: "lime",
        }
      : {
          background: "#fff",
          text: "#333",
          shadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          active: "#f0f0f0",
          activeText: "dodgerblue",
        };
  };

  const colors = getThemeColors();

  const styles: { [key: string]: React.CSSProperties } = {
    hamburgerMenu: {
      position: "relative",
    },
    hamburgerIcon: {
      fontSize: "24px",
      background: "none",
      border: "none",
      cursor: "pointer",
      color: colors.text,
      padding: "8px",
    },
    menu: {
      position: "absolute",
      top: "100%",
      right: "0",
      backgroundColor: colors.background,
      boxShadow: colors.shadow,
      padding: "15px",
      borderRadius: "8px",
      zIndex: 1000,
      minWidth: "200px",
      marginTop: "10px",
    },
    menuList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    menuItem: {
      margin: "15px 0",
      fontSize: "16px",
      textAlign: "center",
    },
    menuLink: {
      textDecoration: "none",
      color: colors.text,
      fontWeight: "bold",
      display: "block",
      padding: "10px",
      borderRadius: "4px",
      transition: "background-color 0.3s, color 0.3s",
    },
    activeLink: {
      backgroundColor: colors.active,
      color: colors.activeText,
      textDecoration: "none",
      fontWeight: "bold",
      display: "block",
      padding: "10px",
      borderRadius: "4px",
      transition: "background-color 0.3s, color 0.3s",
    },
    activeState: {
      marginLeft: "10px",
      fontSize: "14px",
      color: colors.text,
    },
  };

  return (
    <div style={styles.hamburgerMenu}>
      <button style={styles.hamburgerIcon} onClick={toggleMenu}>
        ☰
      </button>
      {isOpen && (
        <nav style={styles.menu}>
          <ul style={styles.menuList}>
            <li style={styles.menuItem}>
              <a
                href="#home"
                style={
                  activeItem === "home" ? styles.activeLink : styles.menuLink
                }
                onClick={() => handleItemClick("home")}
              >
                Home
              </a>
            </li>
            <li style={styles.menuItem}>
              <a
                href="#about"
                style={
                  activeItem === "about" ? styles.activeLink : styles.menuLink
                }
                onClick={() => handleItemClick("about")}
              >
                About
              </a>
            </li>
            <li style={styles.menuItem}>
              <a
                href="#contact"
                style={
                  activeItem === "contact" ? styles.activeLink : styles.menuLink
                }
                onClick={() => handleItemClick("contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default HamburgerMenu;
