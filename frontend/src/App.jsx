import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { AuthContext } from "./contexts/AuthContext";
import Login from "./login/Login";
import MainBoardPage from "./goal-board/MainBoardPage";
import { PrivateRoute } from "./Routes/PrivateRoute";
import { GraphRoutes } from "./Routes/GraphRoutes";

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
            path="/*"
            element={
              <PrivateRoute>
                <GraphRoutes />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
