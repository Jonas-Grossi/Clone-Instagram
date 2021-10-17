import Avatar from "../Avatar/Avatar";
import { CommentList } from "../Comments/Comments";
import CommentForm from "../CommentForm/CommentForm";
import "./styles.css"
function Post(props) {
  
    return (
    <div className="post-container">
      
      <Avatar name={props.data.userName}/>
      <p className="post-message">{props && props.data ? props.data.message: "No message "}
        </p>
      <CommentList comments={props.data.comments} />
      <CommentForm/>
    </div>
  );
}

export default Post;
