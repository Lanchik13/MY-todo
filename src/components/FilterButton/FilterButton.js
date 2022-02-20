import React from "react";
import styles from "./FilterButton.module.scss";

function FilterButton(props) {
  return (
    <button
      type="button"
      className={`btn ${styles.filterButton}`}
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      <span className="visually-hidden">Show </span>
      <span>{props.name}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

export default FilterButton;
