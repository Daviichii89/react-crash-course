import Post from "./Post";
import { useLoaderData } from "react-router-dom";
import styles from "./PostsList.module.css";

function PostsList() {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>No posts found.</h2>
          <p>Start adding posts to see them here!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
