import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./login/Login";
import { PrivateRoute } from "./Routes/PrivateRoute";
import { GraphRoutes } from "./Routes/GraphRoutes";

function App() {
  return (
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
  );
}

export default App;
