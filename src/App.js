import AllRoute from "./allRoute";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createContext, useState } from "react";

// Step 1: Create and export AppContext
export const AppContext = createContext(null);

export default function App() {
  const [usernameLogin, setUsernameLogin] = useState("");

  return (
    <AppContext.Provider value={{ setUsernameLogin, usernameLogin }}>
      <Header />
      <AllRoute />
      <Footer />
    </AppContext.Provider>
  );
}
