import Avatar from "../Avatar/Avatar";
import { CommentList } from "../Comments/Comments";
import CommentForm from "../CommentForm/CommentForm";
import "./styles.css"
function Post(props) {

  return (
    <div className="post-container">

      <Avatar name={props.data.userName} />
      <p className="post-message">{props && props.data ? props.data.message : "No message "}
      </p>
      {props && props.data && props.data.image ? (
        <img style={{ marginTop: 10 }} src={props.data.image} width="100%"
          alt="Imagem exemplo" />

      ) : (

        <p className="post-message">
          {props && props.data ? props.data.message :
            "No message"}

        </p>
      )}
      <CommentList comments={props.data.comments} />
      <CommentForm buttonText="Comentar" placeholder="Escreva um comentário" />
    </div>
  );
}

export default Post;
