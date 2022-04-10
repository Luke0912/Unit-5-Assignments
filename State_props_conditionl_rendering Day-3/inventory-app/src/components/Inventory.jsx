import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens: 25,
  });
  const [total, setTotal] = useState(88);
  // Create add and remove functions here that changes the
  // state.
  const counterHandler = (value, type) => {
    // if (type === "books") {
    //   setInv({ ...inv, books: inv.books + value });
    //   return;
    // }
    // if (type === "notebooks") {
    //   setInv({ ...inv, books: inv.notebooks + value });
    //   return;
    // }
    // var type = "books"
    if (inv[type] + value < 0) {
      return;
    }
    setInv({ ...inv, [type]: inv[type] + value });
    totalCount();
  };
  const totalCount = () => {
    let sum = 0
    const keys = Object.keys(inv);
    console.log(keys);
    keys.forEach((key, index) => {
      sum = sum+inv[key]
      console.log(sum);
  });
    setTotal(sum)
  };
  return (
    <div
      style={{
        border: "1px solid black",
        alignItems: "center",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button
          className="circlularButton"
          onClick={() => {
            counterHandler(1, "books");
          }}
        >
          +
        </button>
        <button
          className="circlularButton"
          onClick={() => {
            counterHandler(-1, "books");
          }}
        >
          -
        </button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button
          className="circlularButton"
          onClick={() => {
            counterHandler(1, "notebooks");
          }}
        >
          +
        </button>
        <button
          className="circlularButton"
          onClick={() => {
            counterHandler(-1, "notebooks");
          }}
        >
          -
        </button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button
          className="circlularButton"
          onClick={() => {
            counterHandler(1, "pens");
          }}
        >
          +
        </button>
        <button
          className="circlularButton"
          onClick={() => {
            counterHandler(-1, "pens");
          }}
        >
          -
        </button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button
          className="circlularButton"
          onClick={() => {
            counterHandler(1, "inkpens");
          }}
        >
          +
        </button>
        <button
          className="circlularButton"
          onClick={() => {
            counterHandler(-1, "inkpens");
          }}
        >
          -
        </button>
        <span>{inv.inkpens}</span>
      </div>
      {/*calculate total and show it*/}
      total: {total}
    </div>
  );
};
