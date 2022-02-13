import React from "react";
import "./Title.css";
import { useState } from "react/cjs/react.development";

const Title = ({ handelsubmit }) => {
  const [val, setVal] = useState("");

  return (
    <div className="Title_wrapper">
      <div className="Title_box">
        MY TO DO LIST
        <div>
          <input
            value={val}
            onChange={(e) => {
              setVal(e.target.value);
            }}
            className="input_box"
            type="text"
            name="name"
            placeholder="Title.."
          />
          <button onClick={() => handelsubmit(val)} className="button_box">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Title;
