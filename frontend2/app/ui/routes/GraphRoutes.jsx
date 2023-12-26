import { Navigate, Route, Routes } from "react-router-dom";
import MainBoardPage from "../goal-board/MainBoardPage";

export const GraphRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="home" element={<MainBoardPage />} />
      </Routes>
    </>
  );
};
