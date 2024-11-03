import React, { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";

const App: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      minHeight: "100vh",
      backgroundColor: theme === "dark" ? "#1a1a1a" : "#f5f5f5",
      transition: "background-color 0.3s ease",
      padding: "20px",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
    },
    title: {
      color: theme === "dark" ? "#fff" : "#333",
      margin: 0,
      fontSize: "24px",
    },
    themeButton: {
      padding: "8px 16px",
      borderRadius: "4px",
      border: "none",
      backgroundColor: theme === "dark" ? "#444" : "#ddd",
      color: theme === "dark" ? "#fff" : "#333",
      cursor: "pointer",
      marginRight: "20px",
      transition: "all 0.3s ease",
    },
    controlsWrapper: {
      display: "flex",
      alignItems: "center",
    },
    content: {
      color: theme === "dark" ? "#fff" : "#333",
      maxWidth: "800px",
      margin: "0 auto",
      padding: "20px",
      backgroundColor: theme === "dark" ? "#2a2a2a" : "#fff",
      borderRadius: "8px",
      boxShadow:
        theme === "dark"
          ? "0 4px 6px rgba(0, 0, 0, 0.3)"
          : "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    themeDisplay: {
      marginTop: "20px",
      textAlign: "center" as const,
      color: theme === "dark" ? "#fff" : "#333",
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>My React App</h1>
        <div style={styles.controlsWrapper}>
          <button onClick={toggleTheme} style={styles.themeButton}>
            {theme === "light" ? "🌙" : "☀️"} Toggle Theme
          </button>
          <HamburgerMenu theme={theme} />
        </div>
      </header>

      <main style={styles.content}>
        <h3>
          You can toggle the theme and click on the nav bar links to make them
          active
        </h3>
        <p style={styles.themeDisplay}>
          Current Theme: {theme.charAt(0).toUpperCase() + theme.slice(1)}
        </p>
      </main>
    </div>
  );
};

export default App;
