import NewPost from "./Newpost";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Maximiliam" body="Maximiliano es gay" />
        <Post author="Mateo" body="Que estara haciendo este mmhuevo" />
        <Post author="1+1" body="2" />
      </ul>
    </>
  );
}

export default PostsList;
