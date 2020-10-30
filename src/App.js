import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Login from "./pages/Login";
import { useStateValue } from "./api/StateProvider";
function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Body />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
