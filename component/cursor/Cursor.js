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
        mixBlendMode: cursor.mode ? "difference" : "normal",
      }}>
      <svg
        width={50}
        height={50}
        viewBox="0 0 50 50"
        style={{
          position: "absolute",
          left: clientX,
          top: clientY,
          transform: `translate(-50%, -50%) scale(${
            cursor.active || cursor.mode ? 3.5 : 1
          })`,
          fill: cursor.active ? "#1e1e1e" : "#F2EFE6",
          transition: "transform .2s ease-in-out",
        }}>
        <g>
          <circle cx="25" cy="25" r="8" />
          {cursor.active && (
            <text
              fill="#F2EFE6"
              x="50%"
              y="50%"
              textAnchor="middle"
              alignmentBaseline="middle"
              fontSize="4px">
              view
            </text>
          )}
        </g>
      </svg>
    </div>
  );
};
