import React from "react";
import "./List.css";
import { Check, X } from "react-feather";
import { useState } from "react";

const List = ({ title, deleteData }) => {
  const [isCheck, setIsCheck] = useState(false);
  const HandleClick = () => {
    if (isCheck === false) {
      setIsCheck(true);
    } else {
      setIsCheck(false);
    }
  };
  return (
    <div className="list_wrapper " onClick={HandleClick}>
      <div className="icon">{isCheck === true ? <Check /> : ""}</div>
      <div className={isCheck === true ? "list_text cut" : "list_text "}>
        {title}
      </div>
      <div onClick={() => deleteData(title)} className="icon">
        <X />
      </div>
    </div>
  );
};

export default List;
