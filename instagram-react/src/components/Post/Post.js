import Avatar from "../Avatar/Avatar";
import { CommentList } from "../Comments/Comments";
import CommentForm from "../CommentForm/CommentForm";
function Post(props) {
  
    return (
    <div
      style={{
        border: 1,
        borderColor: "black",
        borderStyle: "solid ",
        margin: 20,
        padding: 10,
        backgroundColor: "white",
      }}
    >
      <Avatar name= {props.data ? props.data.userName : "No User "}/>
      <p
        style={{
          border: 1,
          borderColor: "silver",
          borderStyle: "solid ",
          
          padding: 10,
          
        }}
      >
          
          
        {props && props.data ? props.data.message: "No message "}
        </p>
      <CommentList comments={props.data.comments} />
      <CommentForm/>
    </div>
  );
}

export default Post;
