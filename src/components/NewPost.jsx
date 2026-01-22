import { useState } from "react";
import styles from "./NewPost.module.css";

function NewPost({ onAddPost, onCancel }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthorName, setEnteredAuthorName] = useState("");

  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }

  function changeAuthorNameHandler(event) {
    setEnteredAuthorName(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      author: enteredAuthorName,
      body: enteredBody,
    };
    console.log(postData);
    onAddPost(postData);
    onCancel();
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          required
          onChange={changeAuthorNameHandler}
        />
      </p>
      <p className={styles.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
