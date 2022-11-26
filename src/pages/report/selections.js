import { useState } from "react";
import styles from "./Inicio.module.css";

export function Selection(props) {
  function handleChange(e) {
    props.setFilters((prevValues) => ({
      ...prevValues,
      [props.name]: e.target.value,
    }));
  }

  return (
    <section class={styles.sect_item}>
      <label>
        {props.label}
        <select title="Selecione" onChange={handleChange}>
          <option selected>
            Selecione
          </option>
          {props.select.map((item, index) => {
            return <option value={item}>{item}</option>;
          })}
        </select>
      </label>
    </section>
  );
}