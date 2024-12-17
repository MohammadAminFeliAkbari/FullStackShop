import AllRoute from "./allRoute";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createContext, useState } from "react";

// Step 1: Create and export AppContext
export const AppContext = createContext();

export default function App() {
  const [usernameLogin, setUsernameLogin] = useState("");
  return (
    <AppContext.Provider
      value={{
        setUsernameLogin,
        usernameLogin,
        BASE_URL: "http://127.0.0.1:8000/",
      }}
    >
      <Header />
      <main>
        <AllRoute />
      </main>
      <Footer />
    </AppContext.Provider>
  );
}
