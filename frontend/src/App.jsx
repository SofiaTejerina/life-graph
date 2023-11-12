import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { AuthContext } from "./contexts/AuthContext";
import Login from "./login/Login";
import MainBoardPage from "./goal-board/MainBoardPage";

function App() {
  const [isUserLogged, setIsUserLogged] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        isUserLogged,
        setIsUserLogged,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route
            path="/home"
            element={
              isUserLogged ? <MainBoardPage /> : <Navigate to="/login" />
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
