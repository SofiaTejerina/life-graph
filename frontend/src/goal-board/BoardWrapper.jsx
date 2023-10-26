import { useEffect, useState } from "react";

import BoardContextMenu from "./BoardContextMenu";
import GoalBoard from "./GoalBoard";

const BoardWrapper = () => {
  const [rightButtonClicked, setRightButtonClicked] = useState(false);
  const [rightClickLocation, setRightClickLocation] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    // Override right click in the board
    const handleRightClick = () => setRightButtonClicked(false);
    window.addEventListener("click", handleRightClick);
    return () => {
      window.removeEventListener("click", handleRightClick);
    };
  }, []);

  return (
    <div id="root">
      <div
        className="right-side-component"
        onContextMenu={(e) => {
          e.preventDefault(); // prevent the default behaviour when right clicked
          setRightButtonClicked(true);
          setRightClickLocation({
            x: e.pageX,
            y: e.pageY,
          });
        }}
      >
        <GoalBoard />
      </div>
      {rightButtonClicked && (
        <BoardContextMenu
          verticalPosition={rightClickLocation.y}
          horizontalPosition={rightClickLocation.x}
        />
      )}
    </div>
  );
};

export default BoardWrapper;
