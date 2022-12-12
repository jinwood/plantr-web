import React from "react";
import styles from "../../styles/PlantForm.module.css";

export default function Plant() {
  return (
    <form action="/send-data-here" method="post" className={styles.container}>
      <div>
        <label for="first">Username:</label>
        <input type="text" id="username" name="username" />
      </div>

      <div>
        <label for="postUrl">Post URL:</label>
        <input type="text" id="postUrl" name="postUrl" />
      </div>

      <div>
        <label htmlFor="tip">Tip</label>
        <input type="checkbox" name="tip" />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
