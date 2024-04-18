/** @format */
import React, { useContext } from "react";
import useMousePosition from "./useMousePosition";
import { CursorContext } from "./CursorContextProvider";

export const Cursor = () => {
  const { clientX, clientY } = useMousePosition();
  const [cursor] = useContext(CursorContext);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        pointerEvents: "none",
        left: clientX,
        top: clientY,
        mixBlendMode: "difference",
      }}>
      <svg
        width={40}
        height={40}
        viewBox="0 0 40 40"
        style={{
          position: "absolute",
          transform: `translate(-50%, -50%) scale(${cursor.active ? 4 : 1})`,
          fill: cursor.mode ? "white" : "black",
          transition: "transform .2s ease-in-out",
        }}>
        <g>
          <circle cx="25" cy="25" r="8" />
        </g>
      </svg>
    </div>
  );
};
