import Avatar from "../Avatar/Avatar";
import "./styles.css";
function Comment(props) {
  return (
    <div className="comment"
      style={{
        border: 1,
        borderColor: "skyblue",
        borderStyle: "dashed",
        padding: 3,
        margin: 2,
      }}
    >
     <strong>{props.userName}</strong>
      {props.message}
    </div>
  );
}
const CommentList = (props) => {
  
    return (
    <div className="coments-container">
      {props.comments ? (
        props.comments.map((comment) => ( 
          <Comment message={comment.message} userName={comment.userName}/>
        ))
        ) : (

          <span className="msg-comments">
            Seja o primeiro a comentar
          </span>

        )}
          </div>

      );
};
export { Comment, CommentList };
