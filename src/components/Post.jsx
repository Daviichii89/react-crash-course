import { Link } from "react-router-dom";
import styles from "./Post.module.css";

function Post({ author, body, id }) {
  return (
    <li className={styles.post}>
      <Link to={`/posts/${id}`}>
        <p className={styles.author}>{author}</p>
        <p className={styles.text}>{body}</p>
      </Link>
    </li>
  );
}

export default Post;
