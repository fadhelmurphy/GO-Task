import dynamic from "next/dynamic";
import React, { useState } from "react";
const Rectangle = dynamic(() => import("Components/rectangle"), { ssr: false });

const random_rgba = () => {
  var o = Math.round,
    r = Math.random,
    s = 255;
  return (
    "rgba(" +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    r().toFixed(1) +
    ")"
  );
};
const HandleCopyText = (rgbcode) => {
    const dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = `${rgbcode}`;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    alert(`Success copy code : ${rgbcode}`);

};
export default function ParentRect(props) {
  const [isActive, setIsActive] = useState(false);
  const [currentColor, setCurrentColor] = useState("");
  return (
    <div
      className={`parent-rect-${props.idx + 1}`}
      onClick={() => setIsActive(!isActive)}
    >
      <div className="title">
        <h1>
          <span>{`Rectangle ${props.idx + 1}`}</span>
          {currentColor && <span className="currentColor">{` Selected : ${currentColor}`}</span>}
        </h1>
        <h1>{isActive ? "-" : "+"}</h1>
      </div>
      {isActive && (
        <div className="list">
          {Array.from({ length: 64 }, (_, idx) => (
            <Rectangle
              idx={idx}
              rgb={random_rgba()}
              onClick={(val) => {HandleCopyText(val); setCurrentColor(val)}}
            />
          ))}
        </div>
      )}
      <style jsx>
        {`
          .parent-rect-${props.idx + 1} {
            padding: 25px;
            background: ${currentColor || "#eee"};
            margin: 0 0 20px;
          }
          .parent-rect-${props.idx + 1} .title {
            display: flex;
            justify-content: space-between;
            cursor: pointer;
          }
          .list {
            display: grid;
            grid-template-columns: repeat(8, 1fr);
            grid-gap: 14px;
          }
        `}
      </style>
    </div>
  );
}
